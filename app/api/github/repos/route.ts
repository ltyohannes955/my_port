import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username");

  if (!username) {
    return NextResponse.json({ error: "Username required" }, { status: 400 });
  }

  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=20`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch repos" },
        { status: 404 }
      );
    }

    const repos = await res.json();

    return NextResponse.json(
      repos.map(
        (repo: {
          id: number;
          name: string;
          description: string;
          html_url: string;
          homepage: string;
          stargazers_count: number;
          forks_count: number;
          language: string;
          topics: string[];
          updated_at: string;
        }) => ({
          id: repo.id,
          name: repo.name,
          description: repo.description,
          html_url: repo.html_url,
          homepage: repo.homepage,
          stargazers_count: repo.stargazers_count,
          forks_count: repo.forks_count,
          language: repo.language,
          topics: repo.topics || [],
          updated_at: repo.updated_at,
        })
      )
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch" },
      { status: 500 }
    );
  }
}
