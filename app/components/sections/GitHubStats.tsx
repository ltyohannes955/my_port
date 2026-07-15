"use client";

import { useEffect, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Github01Icon,
  UserGroupIcon,
  RepositoryIcon,
  StarIcon,
  GitBranchIcon,
  UserStar01Icon,
  CodeIcon,
} from "@hugeicons/core-free-icons";

interface Stats {
  public_repos: number;
  followers: number;
  following: number;
  total_stars: number;
  total_forks: number;
  total_watchers: number;
  total_open_issues: number;
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
  location: string;
  blog: string;
  company: string;
  twitter_username: string;
  created_at: string;
  public_gists: number;
  html_url: string;
  hireable: boolean;
  language_count: number;
}

interface Contribution {
  date: string;
  level: number;
}

interface GitHubStatsProps {
  username?: string;
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function GitHubStats({
  username: _username,
}: GitHubStatsProps) {
  const [stats, setStats] = useState<Stats | null>(null);
  const [contributions, setContributions] = useState<Contribution[]>([]);

  useEffect(() => {
    const u = _username || "ltyohannes955";
    fetch(`/api/github/user?username=${u}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.login) setStats(data);
      })
      .catch(() => {});
    fetch(`/api/github/contributions?username=${u}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.contributions) setContributions(data.contributions);
      })
      .catch(() => {});
  }, [_username]);

  const s = stats;
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - 365);
  const cutoffStr = cutoff.toISOString().split("T")[0];
  const sliced = contributions
    .filter((c) => c.date >= cutoffStr)
    .sort((a, b) => a.date.localeCompare(b.date));
  const cols = Math.max(4, Math.ceil(sliced.length / 7));
  const rows = 7;

  

  return (
    <section
      id="github"
      className="min-h-dvh flex items-center justify-center py-10 px-4 sm:px-8"
    >
      <div className="max-w-4xl mx-auto w-full">
        <p className="text-accent font-mono text-sm mb-2 tracking-widest uppercase">
          05 &mdash; GitHub
        </p>
        <h2 className="text-3xl sm:text-5xl font-bold mb-12">
          Open Source
        </h2>

        {s && (
          <>
            <div className="bg-card/50 border border-white/5 rounded-2xl p-6 mb-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-accent-secondary flex items-center justify-center shrink-0">
                  <HugeiconsIcon icon={Github01Icon} size={28} color="#fff" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl font-bold truncate">{s.name}</h3>
                  <p className="text-muted text-sm">@{s.login}</p>
                  {s.bio && <p className="text-muted text-xs mt-0.5">{s.bio}</p>}
                  <div className="flex flex-wrap gap-x-4 gap-y-0.5 mt-1 text-xs text-muted">
                    {s.location && <span>📍 {s.location}</span>}
                    {s.company && <span>🏢 {s.company}</span>}
                    {s.twitter_username && <span>🐦 @{s.twitter_username}</span>}
                    {s.blog && (
                      <a href={s.blog} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                        🔗 {s.blog.replace(/^https?:\/\//, "")}
                      </a>
                    )}
                    <span>
                      🗓️ Joined{" "}
                      {new Date(s.created_at).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                      })}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: "Repositories", value: s.public_repos, icon: RepositoryIcon },
                  { label: "Stars", value: s.total_stars, icon: StarIcon },
                  { label: "Forks", value: s.total_forks, icon: GitBranchIcon },
                  { label: "Followers", value: s.followers, icon: UserGroupIcon },
                  { label: "Following", value: s.following, icon: UserGroupIcon },
                  { label: "Watchers", value: s.total_watchers, icon: UserStar01Icon },
                  { label: "Gists", value: s.public_gists, icon: CodeIcon },
                  { label: "Languages", value: s.language_count, icon: CodeIcon },
                ].map((card) => (
                  <div
                    key={card.label}
                    className="bg-surface rounded-xl p-3 text-center"
                  >
                    <div className="flex justify-center mb-1">
                      <HugeiconsIcon icon={card.icon} size={16} color="#2dd4bf" />
                    </div>
                    <p className="text-lg font-bold">{card.value}</p>
                    <p className="text-muted text-[10px] uppercase tracking-wider">{card.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card/50 border border-white/5 rounded-2xl p-6">
              <h3 className="text-sm font-semibold mb-4 text-muted uppercase tracking-wider">
                Contribution Activity
              </h3>
              <div
                className="grid gap-[2px] pb-1"
                style={{
                  gridTemplateColumns: `repeat(${cols}, 13px)`,
                  gridTemplateRows: `repeat(7, 13px)`,
                }}
              >
                {Array.from({ length: cols * rows }).map((_, i) => {
                  const col = i % cols;
                  const row = Math.floor(i / cols);
                  const dataIndex = col * rows + row;
                  const c = dataIndex < sliced.length ? sliced[dataIndex] : null;
                  const level = c ? c.level : 0;
                  const intensity = [0, 0.2, 0.4, 0.6, 0.85][Math.min(level, 4)];
                  const labels = ["No activity", "Light", "Moderate", "Active", "Very active"];
                  return (
                    <div key={i} className="relative group">
                      <div
                        className="rounded-[2px] transition-all duration-150 group-hover:scale-[1.8] group-hover:z-10 group-hover:ring-1 group-hover:ring-accent"
                        style={{
                          width: "13px",
                          height: "13px",
                          backgroundColor: intensity
                            ? `rgba(45, 212, 191, ${intensity})`
                            : "rgba(255,255,255,0.04)",
                        }}
                      />
                      {c && (
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-2 py-1 rounded-md bg-[#1a1a2e] border border-white/10 text-[10px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20 shadow-lg">
                          <p className="text-foreground font-medium">{c.date}</p>
                          <p className="text-accent">{labels[Math.min(level, 4)]}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              {sliced.length > 0 && (
                <p className="text-muted text-xs mt-2">
                  {sliced.filter((c) => c.level > 0).length} active days in the past{" "}
                  {Math.round(sliced.length / 7)} weeks
                </p>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
