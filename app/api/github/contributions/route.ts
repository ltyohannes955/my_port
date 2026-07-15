import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username");

  if (!username) {
    return NextResponse.json({ error: "Username required" }, { status: 400 });
  }

  try {
    const res = await fetch(
      `https://github.com/users/${username}/contributions`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch contributions" },
        { status: 404 }
      );
    }

    const html = await res.text();

    const contributions: { date: string; level: number }[] = [];
    const rectRegex = /data-date="([^"]+)"[^>]*data-level="(\d)"/g;
    let match;
    while ((match = rectRegex.exec(html)) !== null) {
      contributions.push({
        date: match[1],
        level: parseInt(match[2], 10),
      });
    }

    if (contributions.length === 0) {
      return NextResponse.json(
        { error: "No contribution data found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ contributions });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch contributions" },
      { status: 500 }
    );
  }
}
