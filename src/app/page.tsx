import AboutSection from '@/components/sections/about-section';
import ContactSection from '@/components/sections/contact-section';
import ExperienceSection from '@/components/sections/experience-section';
import HeroSection from '@/components/sections/hero-section';
import ProjectsSection from '@/components/sections/projects-section';
import ResearchSection from '@/components/sections/research-section';
import CertificationsSection from '@/components/sections/certifications-section';
import Header from '@/components/header';
import Footer from '@/components/footer';
import FloatingSocials from '@/components/floating-socials';
import SkillsSection from '@/components/sections/skills-section';

export default function Home() {
  return (
    <div className="relative overflow-x-hidden bg-background">
      <Header />
      <FloatingSocials />
      <main className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ResearchSection />
        <CertificationsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
