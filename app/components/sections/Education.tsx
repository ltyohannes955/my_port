"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  GraduationScrollIcon,
  Certificate01Icon,
  Calendar01Icon,
} from "@hugeicons/core-free-icons";

const education = [
  {
    degree: "BSc in Software Engineering",
    school: "Bits College — Addis Ababa, Ethiopia",
    period: "2022 — 2026",
    description:
      "Coursework in data structures, algorithms, software engineering, databases, and web development.",
    icon: GraduationScrollIcon,
  },
  {
    degree: "High School Diploma",
    school: "Saint Josaph school — Addis Ababa, Ethiopia",
    // period: "2023 — 2024",
    icon: Certificate01Icon,
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="min-h-dvh flex items-center justify-center py-10 px-4 sm:px-8"
    >
      <div className="max-w-4xl mx-auto w-full">
        <p className="text-accent font-mono text-sm mb-2 tracking-widest uppercase">
          03 &mdash; Education
        </p>
        <h2 className="text-3xl sm:text-5xl font-bold mb-12">
          Academic Background
        </h2>

        <div className="space-y-6">
          {education.map((item, i) => (
            <div
              key={item.degree}
              className="bg-card/50 border border-white/5 rounded-2xl p-6 animate-fade-up opacity-0"
              style={{ animationDelay: `${0.2 + i * 0.2}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                  <HugeiconsIcon icon={item.icon} size={22} color="#2dd4bf" />
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-1">
                    <h3 className="text-lg font-bold">{item.degree}</h3>
                    <span className="text-xs text-muted font-mono flex items-center gap-1">
                      <HugeiconsIcon
                        icon={Calendar01Icon}
                        size={12}
                        color="currentColor"
                      />
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm text-accent font-medium">
                    {item.school}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
