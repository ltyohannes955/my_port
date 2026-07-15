"use client";

import { useRef, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Github01Icon,
  Link01Icon,
} from "@hugeicons/core-free-icons";
import { projects } from "@/app/data/projects";

const languageColors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f7df1e",
  Python: "#3572A5",
  Go: "#00ADD8",
  Rust: "#dea584",
  "C#": "#178600",
  Java: "#b07219",
};

const accentOverlays = [
  "rgba(45,212,191,0.08)",
  "rgba(139,92,246,0.08)",
  "rgba(34,197,94,0.08)",
  "rgba(245,158,11,0.08)",
  "rgba(239,68,68,0.08)",
];

function ProjectCard({
  project,
  accent,
}: {
  project: (typeof projects)[number];
  accent: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: y * -8, y: x * 8 });
  };

  const handleLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="group relative rounded-2xl overflow-hidden border border-white/[0.06] cursor-default"
      style={{ perspective: "1200px" }}
    >
      <div
        className="relative w-full min-h-[320px] sm:min-h-[460px] transition-transform duration-500 ease-out"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        <img
          src={project.imageUrl}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
        />

        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to top, #050508 0%, #050508 42%, rgba(5,5,8,0.75) 55%, rgba(5,5,8,0.2) 72%, transparent 85%)`,
          }}
        />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, ${accent} 0%, transparent 65%)`,
          }}
        />

        <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
          <div className="flex items-start justify-between mb-2.5">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              {project.title}
            </h3>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted/80 mb-1">
            {project.language && (
              <span className="flex items-center gap-1.5">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{
                    backgroundColor:
                      languageColors[project.language] || "#6b7280",
                  }}
                />
                {project.language}
              </span>
            )}
          </div>

          <div className="overflow-hidden">
            <p className="text-foreground/80 text-sm leading-relaxed translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 mt-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-[11px] rounded-full bg-white/5 text-foreground/70 border border-white/10"
              >
                {tag}
              </span>
            ))}
            <div className="flex items-center gap-2 ml-auto">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-accent/10 text-accent text-xs font-medium px-3 py-1.5 rounded-lg border border-accent/20 hover:bg-accent/20 transition-all"
                  onClick={(e) => e.stopPropagation()}
                >
                  <HugeiconsIcon icon={Link01Icon} size={14} color="currentColor" />
                  Live
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted/50 hover:text-accent transition-colors p-1.5"
                  onClick={(e) => e.stopPropagation()}
                >
                  <HugeiconsIcon
                    icon={Github01Icon}
                    size={16}
                    color="currentColor"
                  />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const firstRow = projects.slice(0, 3);
  const secondRow = projects.slice(3);

  return (
    <section id="projects" className="min-h-dvh py-20 sm:py-28 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <p className="text-accent font-mono text-sm mb-2 tracking-widest uppercase">
          04 &mdash; Projects
        </p>
        <h2 className="text-3xl sm:text-5xl font-bold mb-12">
          Things I&apos;ve Built
        </h2>

        <div className="grid md:grid-cols-3 gap-5 mb-5">
          {firstRow.map((p, i) => (
            <ProjectCard key={p.id} project={p} accent={accentOverlays[i]} />
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {secondRow.map((p, i) => (
            <ProjectCard
              key={p.id}
              project={p}
              accent={accentOverlays[i + 3]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
