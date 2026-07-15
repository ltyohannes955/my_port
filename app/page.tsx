import DotFieldBackground from "@/app/components/layout/DotFieldBackground";
import Navigation from "@/app/components/layout/Navigation";
import Footer from "@/app/components/layout/Footer";
import Me from "@/app/components/sections/Me";
import Skills from "@/app/components/sections/Skills";
import Education from "@/app/components/sections/Education";
import Projects from "@/app/components/sections/Projects";
import GitHubStats from "@/app/components/sections/GitHubStats";
import WakaTime from "@/app/components/sections/WakaTime";
import Contact from "@/app/components/sections/Contact";

export default function Home() {
  const githubUsername = process.env.NEXT_PUBLIC_GITHUB_USERNAME;

  return (
    <>
      <DotFieldBackground />
      <div className="relative z-10">
        <Navigation />
        <main>
          <Me />
          <Skills />
          <Education />
          <Projects />
          <GitHubStats username={githubUsername} />
          <WakaTime />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
