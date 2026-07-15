export default function About() {
  return (
    <section
      id="about"
      className="min-h-dvh flex items-center justify-center py-10 px-4 sm:px-8"
    >
      <div className="max-w-4xl mx-auto w-full">
        <p className="text-accent font-mono text-sm mb-2 tracking-widest uppercase">
          01 &mdash; About
        </p>
        <h2 className="text-3xl sm:text-5xl font-bold mb-8">
          Who I Am
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              I&apos;m a software developer who loves building things that live
              on the internet. I develop applications that are performant,
              accessible, and a pleasure to use.
            </p>
            <p>
              My stack spans from React and Next.js on the frontend to Node.js,
              Python, and databases on the backend. I enjoy the full journey
              from idea to deployment.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me exploring new
              technologies, contributing to open source, or writing about what
              I learn.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-accent to-accent-secondary p-[2px]">
              <div className="w-full h-full rounded-full bg-surface flex items-center justify-center">
                <span className="text-6xl font-bold text-accent">LY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
