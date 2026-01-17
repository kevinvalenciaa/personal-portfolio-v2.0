import HeroHeader from "@/components/sections/HeroHeader";
import Experiences from "@/components/sections/Experiences";
import Projects from "@/components/sections/Projects";
import BlogsSection from "@/components/sections/Blogs";
import SkillsAndSponsors from "@/components/sections/SkillsAndSponsors";
import NewsletterFooter from "@/components/sections/NewsletterFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-background dashed-border-container">
      <div className="dashed-content-lines" aria-hidden="true" />
      <div className="max-w-[690px] mx-2 sm:mx-8 md:mx-auto relative">
        <HeroHeader />
        <Experiences />
        <Projects />
        <BlogsSection />
        <SkillsAndSponsors />
        <NewsletterFooter />
      </div>
    </main>
  );
}
