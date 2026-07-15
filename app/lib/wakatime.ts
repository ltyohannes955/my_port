"use server";

import type { WakaTimeStats } from "@/app/types";

export async function getWakaTimeStats(apiKey: string): Promise<WakaTimeStats | null> {
  try {
    const res = await fetch(
      "https://wakatime.com/api/v1/users/current/stats/last_7_days",
      {
        headers: {
          Authorization: `Basic ${Buffer.from(apiKey).toString("base64")}`,
        },
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) return null;
    const data = await res.json();
    return data.data;
  } catch {
    return null;
  }
}
