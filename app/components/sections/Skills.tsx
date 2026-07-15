import {
  HugeiconsIcon,
} from "@hugeicons/react";
import {
  CodeIcon,
  DatabaseIcon,
  CloudIcon,
  ColorsIcon,
  ToolsIcon,
  CommandIcon,
} from "@hugeicons/core-free-icons";

const skillCategories = [
  {
    title: "Frontend",
    icon: CodeIcon,
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "HTML/CSS",
    ],
  },
  {
    title: "Backend",
    icon: DatabaseIcon,
    skills: [
      "Node.js",
      "Python",
      "REST APIs",
      "PostgreSQL",
      "MongoDB",
    ],
  },
  {
    title: "DevOps",
    icon: CloudIcon,
    skills: [
      "Docker",
      "Git",
      "CI/CD",
      "Vercel",
      "Linux",
    ],
  },
  {
    title: "Design",
    icon: ColorsIcon,
    skills: [
      "UI/UX",
      "Figma",
      "Responsive",
      "Animations",
      "Prototyping",
    ],
  },
  {
    title: "Tools",
    icon: ToolsIcon,
    skills: [
      "VS Code",
      "Postman",
      "Figma",
      "GitHub",
      "Terminal",
    ],
  },
  {
    title: "Other",
    icon: CommandIcon,
    skills: [
      "Agile",
      "Testing",
      "Performance",
      "Security",
      "Architecture",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-dvh flex items-center justify-center py-10 px-4 sm:px-8"
    >
      <div className="max-w-5xl mx-auto w-full">
        <p className="text-accent font-mono text-sm mb-2 tracking-widest uppercase">
          02 &mdash; Skills
        </p>
        <h2 className="text-3xl sm:text-5xl font-bold mb-12">
          Tech Stack
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="bg-card/50 border border-white/5 rounded-2xl p-6 hover:border-accent/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <HugeiconsIcon
                    icon={cat.icon}
                    size={20}
                    color="#2dd4bf"
                  />
                </div>
                <h3 className="font-semibold text-lg">{cat.title}</h3>
              </div>
              <ul className="space-y-2">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-muted text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent/50" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
