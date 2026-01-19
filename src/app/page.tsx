import HeroHeader from "@/components/sections/HeroHeader";
import Experiences from "@/components/sections/Experiences";
import Projects from "@/components/sections/Projects";
import BlogsSection from "@/components/sections/Blogs";
import SkillsAndSponsors from "@/components/sections/SkillsAndSponsors";
import Footer from "@/components/sections/NewsletterFooter";
import { FadeInSection } from "@/components/ui/fade-in-section";
import { PageWrapper } from "@/components/ui/page-wrapper";

export default function Home() {
  return (
    <PageWrapper>
      <main className="min-h-screen bg-background dashed-border-container">
        <div className="dashed-content-lines" aria-hidden="true" />
        <div className="max-w-[690px] mx-2 sm:mx-8 md:mx-auto relative">
          <HeroHeader />
          <FadeInSection>
            <Experiences />
          </FadeInSection>
          <FadeInSection>
            <Projects />
          </FadeInSection>
          <FadeInSection>
            <SkillsAndSponsors />
          </FadeInSection>
          <FadeInSection>
            <BlogsSection />
          </FadeInSection>
          <FadeInSection>
            <Footer />
          </FadeInSection>
        </div>
      </main>
    </PageWrapper>
  );
}
