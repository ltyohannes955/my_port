import { NextResponse } from "next/server";

const languageColors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f7df1e",
  Python: "#3572A5",
  Go: "#00ADD8",
  Rust: "#dea584",
  "C#": "#178600",
  Java: "#b07219",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Dart: "#00B4AB",
  PHP: "#777BB4",
  Kotlin: "#A97BFF",
  Markdown: "#083fa1",
  JSON: "#292929",
  YAML: "#cb171e",
  Docker: "#0db7ed",
  Shell: "#89e051",
  SQL: "#e38c00",
};

async function fetchWaka(range: string) {
  const key = process.env.WAKATIME_API_KEY;
  const res = await fetch(
    `https://wakatime.com/api/v1/users/current/stats/${range}`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(key!).toString("base64")}`,
      },
      next: { revalidate: 3600 },
    }
  );
  return res.json();
}

export async function GET() {
  const key = process.env.WAKATIME_API_KEY;
  if (!key) {
    return NextResponse.json({ error: "API key not configured" }, { status: 400 });
  }

  try {
    const [weeklyRes, allTimeRes] = await Promise.all([
      fetchWaka("last_7_days"),
      fetchWaka("all_time"),
    ]);

    if (weeklyRes.error) {
      return NextResponse.json({ error: weeklyRes.error }, { status: 404 });
    }

    const w = weeklyRes.data;
    const a = allTimeRes.data;

    const mapStats = (arr: any[]) =>
      (arr || []).map(
        (item: { name: string; percent: number; total_seconds: number; text: string }) => ({
          name: item.name,
          percent: Math.round(item.percent * 10) / 10,
          total_seconds: item.total_seconds,
          text: item.text,
        })
      );

    return NextResponse.json({
      weekly: {
        totalSeconds: w.total_seconds,
        totalHours: w.human_readable_total || "0 hrs",
        totalIncludingOther: w.human_readable_total_including_other_language,
        dailyAverage: w.human_readable_daily_average || "0 hrs",
        dailyAverageIncludingOther: w.human_readable_daily_average_including_other_language,
        daysIncludingHolidays: w.days_including_holidays,
        daysMinusHolidays: w.days_minus_holidays,
        range: w.range,
        timezone: w.timezone,
        isCached: w.is_cached,
        isUpToDate: w.is_up_to_date,
        languages: mapStats(w.languages).map((l: any) => ({
          ...l,
          color: languageColors[l.name] || "#6b7280",
        })),
        editors: mapStats(w.editors),
        operatingSystems: mapStats(w.operating_systems),
        projects: mapStats(w.projects),
        categories: mapStats(w.categories),
        bestDay: w.best_day
          ? {
              date: w.best_day.date,
              total_seconds: w.best_day.total_seconds,
              text: w.best_day.text,
            }
          : null,
      },
      allTime: {
        totalSeconds: a.total_seconds,
        totalHours: a.human_readable_total || "0 hrs",
        dailyAverage: a.human_readable_daily_average || "0 hrs",
        daysActive: a.days_minus_holidays,
        languages: mapStats(a.languages).map((l: any) => ({
          ...l,
          color: languageColors[l.name] || "#6b7280",
        })),
        editors: mapStats(a.editors),
        operatingSystems: mapStats(a.operating_systems),
        projects: mapStats(a.projects),
        categories: mapStats(a.categories),
      },
    });
  } catch {
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}
