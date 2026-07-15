"use client";

import { useEffect, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  CodeIcon,
  Clock01Icon,
  LaptopIcon,
  UserStar01Icon,
  StarIcon,
  FolderIcon,
} from "@hugeicons/core-free-icons";

interface StatItem {
  name: string;
  percent: number;
  total_seconds: number;
  text: string;
}

interface LangItem extends StatItem {
  color: string;
}

interface WakaPeriod {
  totalSeconds: number;
  totalHours: string;
  dailyAverage: string;
  daysActive?: number;
  languages: LangItem[];
  editors: StatItem[];
  operatingSystems: StatItem[];
  projects: StatItem[];
  categories: StatItem[];
}

interface WeeklyData extends WakaPeriod {
  totalIncludingOther?: string;
  dailyAverageIncludingOther?: string;
  daysIncludingHolidays?: number;
  daysMinusHolidays?: number;
  range?: string;
  timezone?: string;
  isCached?: boolean;
  isUpToDate?: boolean;
  bestDay?: { date: string; total_seconds: number; text: string } | null;
}

interface AllTimeData extends WakaPeriod {
  daysActive: number;
}

interface WakaData {
  weekly: WeeklyData;
  allTime: AllTimeData;
}

function StatBar({ items, color }: { items: StatItem[]; color?: string }) {
  if (items.length === 0) return <p className="text-xs text-muted py-4">No data yet</p>;
  return (
    <div className="space-y-3">
      {items.slice(0, 8).map((item) => (
        <div key={item.name}>
          <div className="flex justify-between text-sm mb-1">
            <span className="truncate">{item.name}</span>
            <span className="text-muted shrink-0 ml-2">{item.percent}%</span>
          </div>
          <div className="h-1.5 bg-surface rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${item.percent}%`,
                backgroundColor: color || "#2dd4bf",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
  sub,
}: {
  icon: any;
  label: string;
  value: string | number;
  sub?: string;
}) {
  return (
    <div className="bg-card/50 border border-white/5 rounded-2xl p-5">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
          <HugeiconsIcon icon={icon} size={18} color="#2dd4bf" />
        </div>
        <div className="min-w-0">
          <p className="text-[10px] text-muted uppercase tracking-wider">{label}</p>
          <p className="text-xl font-bold truncate">{value}</p>
          {sub && <p className="text-[11px] text-muted">{sub}</p>}
        </div>
      </div>
    </div>
  );
}

export default function WakaTime() {
  const [data, setData] = useState<WakaData | null>(null);

  useEffect(() => {
    fetch("/api/wakatime/stats")
      .then((res) => res.json())
      .then((d) => {
        if (d.weekly) setData(d);
      })
      .catch(() => {});
  }, []);

  const w = data?.weekly;

  return (
    <section
      id="wakatime"
      className="min-h-dvh flex items-center justify-center py-10 px-4 sm:px-8"
    >
      <div className="max-w-4xl mx-auto w-full">
        <p className="text-accent font-mono text-sm mb-2 tracking-widest uppercase">
          06 &mdash; Coding Stats
        </p>
        <h2 className="text-3xl sm:text-5xl font-bold mb-12">
          WakaTime Insights
        </h2>

        {data && (
          <>
            <p className="text-sm text-muted mb-6 uppercase tracking-wider font-mono">
              All Time
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              <StatCard
                icon={Clock01Icon}
                label="Total Time"
                value={data.allTime.totalHours}
              />
              <StatCard
                icon={LaptopIcon}
                label="Daily Avg"
                value={data.allTime.dailyAverage}
              />
              <StatCard
                icon={UserStar01Icon}
                label="Days Active"
                value={data.allTime.daysActive}
              />
              <StatCard
                icon={StarIcon}
                label="Languages"
                value={data.allTime.languages.length}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {data.allTime.languages.length > 0 && (
                <div className="bg-card/50 border border-white/5 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                      <HugeiconsIcon icon={CodeIcon} size={18} color="#2dd4bf" />
                    </div>
                    <h3 className="font-semibold">Languages</h3>
                  </div>
                  <StatBar items={data.allTime.languages} color="#2dd4bf" />
                </div>
              )}
              {data.allTime.projects.length > 0 && (
                <div className="bg-card/50 border border-white/5 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                      <HugeiconsIcon icon={FolderIcon} size={18} color="#2dd4bf" />
                    </div>
                    <h3 className="font-semibold">Projects</h3>
                  </div>
                  <StatBar items={data.allTime.projects} color="#8b5cf6" />
                </div>
              )}
            </div>

            <div className="border-t border-white/5 pt-8 mb-6">
              <p className="text-sm text-muted mb-6 uppercase tracking-wider font-mono">
                This Week
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                <StatCard
                  icon={Clock01Icon}
                  label="This Week"
                  value={w?.totalIncludingOther || "0"}
                />
                <StatCard
                  icon={LaptopIcon}
                  label="Daily Avg"
                  value={w?.dailyAverageIncludingOther || "0"}
                />
                <StatCard
                  icon={UserStar01Icon}
                  label="Days Active"
                  value={w?.daysMinusHolidays || 0}
                  sub={`of ${w?.daysIncludingHolidays || 0} days`}
                />
                <StatCard
                  icon={StarIcon}
                  label="Best Day"
                  value={w?.bestDay?.text || "N/A"}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {w?.languages && w.languages.length > 0 && (
                  <div className="bg-card/50 border border-white/5 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                        <HugeiconsIcon icon={CodeIcon} size={18} color="#2dd4bf" />
                      </div>
                      <h3 className="font-semibold">Languages</h3>
                    </div>
                    <StatBar items={w.languages} color="#2dd4bf" />
                  </div>
                )}
                {w?.projects && w.projects.length > 0 && (
                  <div className="bg-card/50 border border-white/5 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                        <HugeiconsIcon icon={FolderIcon} size={18} color="#2dd4bf" />
                      </div>
                      <h3 className="font-semibold">Projects</h3>
                    </div>
                    <StatBar items={w.projects} color="#8b5cf6" />
                  </div>
                )}
              </div>

              {w?.timezone && (
                <p className="text-muted text-xs flex items-center gap-1">
                  <HugeiconsIcon icon={Clock01Icon} size={12} color="currentColor" />
                  {w.range} &mdash; {w.timezone}
                  {w.isCached ? " — cached" : ""}
                </p>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
