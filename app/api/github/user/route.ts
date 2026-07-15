import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username");

  if (!username) {
    return NextResponse.json({ error: "Username required" }, { status: 400 });
  }

  try {
    const res = await fetch(
      `https://api.github.com/users/${username}`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: "GitHub user not found" },
        { status: 404 }
      );
    }

    const data = await res.json();

    const reposRes = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
      { next: { revalidate: 3600 } }
    );
    const repos = await reposRes.json();
    const reposList = Array.isArray(repos) ? repos : [];

    const totalStars = reposList.reduce(
      (acc: number, repo: { stargazers_count: number }) =>
        acc + repo.stargazers_count,
      0
    );

    const totalForks = reposList.reduce(
      (acc: number, repo: { forks_count: number }) =>
        acc + repo.forks_count,
      0
    );

    const totalWatchers = reposList.reduce(
      (acc: number, repo: { watchers_count: number }) =>
        acc + (repo.watchers_count || 0),
      0
    );

    const totalOpenIssues = reposList.reduce(
      (acc: number, repo: { open_issues_count: number }) =>
        acc + (repo.open_issues_count || 0),
      0
    );

    const languages = new Set(
      reposList
        .map((r: { language: string }) => r.language)
        .filter(Boolean) as string[]
    );

    return NextResponse.json({
      public_repos: data.public_repos,
      followers: data.followers,
      following: data.following,
      total_stars: totalStars,
      total_forks: totalForks,
      total_watchers: totalWatchers,
      total_open_issues: totalOpenIssues,
      avatar_url: data.avatar_url,
      name: data.name,
      login: data.login,
      bio: data.bio,
      location: data.location,
      blog: data.blog,
      company: data.company,
      twitter_username: data.twitter_username,
      created_at: data.created_at,
      public_gists: data.public_gists,
      html_url: data.html_url,
      hireable: data.hireable,
      language_count: languages.size,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch" },
      { status: 500 }
    );
  }
}
