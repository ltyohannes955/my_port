"use client";

const lines: { type: "cmd" | "out" | "com"; text: string; d: number }[] = [
  { type: "cmd", text: "whoami", d: 0.3 },
  { type: "out", text: "Leul Yohannes", d: 0.9 },
  { type: "cmd", text: "role", d: 1.5 },
  { type: "out", text: "Full Stack Developer", d: 2.1 },
  { type: "cmd", text: "cat bio.md", d: 2.7 },
  { type: "com", text: "I architect and build digital products", d: 3.2 },
  { type: "com", text: "from polished frontends to scalable backends.", d: 3.6 },
  { type: "com", text: "I enjoy the full journey from idea to production.", d: 4.0 },
  { type: "cmd", text: "stack --list", d: 4.5 },
  { type: "out", text: "React   Next.js   Node.js   Python   PostgreSQL", d: 5.1 },
];

export default function Me() {
  return (
    <section
      id="me"
      className="relative w-full flex items-center justify-center"
      style={{ height: "100dvh" }}
    >
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
        <div
          className="relative rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl shadow-[0_0_100px_rgba(45,212,191,0.08)] overflow-hidden animate-fade-up opacity-0"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="flex items-center justify-between px-6 sm:px-8 py-4 border-b border-white/[0.06]">
            <div className="flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
            </div>
            <span className="text-xs text-muted/50 font-mono tracking-wide select-none">
              about.me
            </span>
            <div className="w-16 h-8 rounded-full bg-gradient-to-br from-accent/20 to-accent-secondary/20 flex items-center justify-center">
              <span className="text-xs font-bold text-accent font-mono">
                LY
              </span>
            </div>
          </div>

          <div className="px-8 sm:px-10 py-8 sm:py-10 space-y-[5px]">
            {lines.map((l) => (
              <div
                key={l.text + l.d}
                className="animate-fade-up opacity-0"
                style={{ animationDelay: `${l.d}s` }}
              >
                {l.type === "cmd" && (
                  <>
                    <span className="text-accent font-mono text-base sm:text-lg">
                      $&nbsp;
                    </span>
                    <span className="text-foreground/90 font-mono text-base sm:text-lg">
                      {l.text}
                    </span>
                  </>
                )}
                {l.type === "out" && (
                  <span className="text-foreground/70 font-mono text-base sm:text-lg block sm:pl-6">
                    {l.text}
                  </span>
                )}
                {l.type === "com" && (
                  <span className="text-muted/40 font-mono text-base sm:text-lg block sm:pl-6">
                    <span className="text-muted/20">// </span>
                    {l.text}
                  </span>
                )}
              </div>
            ))}

            <div
              className="animate-fade-up opacity-0 flex items-center gap-1.5 mt-3"
              style={{ animationDelay: "5.7s" }}
            >
              <span className="text-accent font-mono text-base sm:text-lg">$</span>
              <span className="w-2.5 h-6 bg-accent/80 animate-blink" />
            </div>
          </div>

          <div
            className="px-8 sm:px-10 pb-8 sm:pb-10 animate-fade-up opacity-0"
            style={{ animationDelay: "6.2s" }}
          >
            <div className="flex items-center gap-4 pt-3 border-t border-white/[0.04] flex-wrap">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 bg-accent text-background px-6 py-3 rounded-lg font-medium text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_24px_rgba(45,212,191,0.25)]"
              >
                <span className="relative z-10">View My Work</span>
                <svg className="relative z-10 w-4 h-4 transition-transform group-hover:translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-white/10 text-foreground/70 px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 hover:border-accent/40 hover:text-accent"
              >
                Get In Touch
              </a>
              <a
                href="https://github.com/ltyohannes955"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto text-muted/40 hover:text-accent transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in"
        style={{ animationDelay: "6.8s", opacity: 0 }}
      >
        <div className="flex flex-col items-center gap-2 text-muted/50">
          <span className="text-[10px] tracking-[0.2em] uppercase font-mono">
            Scroll
          </span>
          <svg
            className="w-3.5 h-3.5 animate-float"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
