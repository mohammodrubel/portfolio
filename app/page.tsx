import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import ExperienceSection from "@/components/experience-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Background Grid and Blurs */}
      <div className="absolute inset-0 -z-10 min-h-screen w-full bg-white dark:bg-black 
        bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] 
        dark:bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] 
        bg-[size:4rem_4rem]">
        
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[200px] w-[200px] md:h-[310px] md:w-[310px] rounded-full bg-primary/20 blur-[80px] md:blur-[100px]" />
        
        <div className="absolute bottom-20 right-10 -z-10 h-[150px] w-[150px] md:h-[200px] md:w-[200px] rounded-full bg-primary/20 blur-[80px] md:blur-[100px]" />
        
        <div className="absolute top-1/2 left-1/4 -z-10 h-[180px] w-[180px] md:h-[250px] md:w-[250px] rounded-full bg-secondary/20 blur-[80px] md:blur-[100px]" />
      </div>

      {/* Page Sections */}
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
