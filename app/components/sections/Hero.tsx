"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full flex items-center justify-center px-4 text-center"
      style={{ height: "100dvh" }}
    >
      <div>
        <p
          className="text-accent font-mono text-xs sm:text-sm mb-5 tracking-[0.2em] uppercase animate-fade-up"
          style={{ animationDelay: "0.1s", opacity: 0 }}
        >
          <span className="inline-block w-8 h-[1px] bg-accent/50 align-middle mr-2" />
          Full Stack Developer
          <span className="inline-block w-8 h-[1px] bg-accent/50 align-middle ml-2" />
        </p>

        <h1
          className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-4 animate-fade-up"
          style={{ animationDelay: "0.3s", opacity: 0 }}
        >
          <span className="text-foreground">Leul </span>
          <span className="text-accent relative inline-block">
            Yohannes
            <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-accent to-accent-secondary rounded-full" />
          </span>
        </h1>

        <p
          className="text-muted text-base sm:text-lg max-w-md mx-auto mb-10 leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.5s", opacity: 0 }}
        >
          I architect and build digital products — from polished frontends to
          scalable backends.
        </p>

        <div
          className="flex items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: "0.7s", opacity: 0 }}
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 bg-accent text-background px-7 py-3 rounded-full font-medium overflow-hidden transition-all duration-300 hover:shadow-[0_0_24px_rgba(45,212,191,0.3)]"
          >
            <span className="relative z-10">View My Work</span>
            <svg
              className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
            <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-white/10 text-foreground/80 px-7 py-3 rounded-full font-medium transition-all duration-300 hover:border-accent/50 hover:text-accent hover:shadow-[0_0_20px_rgba(45,212,191,0.1)]"
          >
            Get In Touch
          </a>
        </div>
      </div>

      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in"
        style={{ animationDelay: "1.2s", opacity: 0 }}
      >
        <div className="flex flex-col items-center gap-2 text-muted">
          <span className="text-[10px] tracking-[0.15em] uppercase font-mono">
            Scroll
          </span>
          <svg
            className="w-4 h-4 animate-float"
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
