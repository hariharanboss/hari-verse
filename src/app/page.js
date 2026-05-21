import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import GridBackground from "@/components/GridBackground";
import ParticleField from "@/components/ParticleField";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SectionDivider from "@/components/SectionDivider";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import TelegramEcosystem from "@/components/TelegramEcosystem";
import Communities from "@/components/Communities";
import SocialLinks from "@/components/SocialLinks";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <GridBackground />
      <main className="relative min-h-screen">
        <ParticleField />
        <Header />
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Education />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Achievements />
        <SectionDivider />
        <TelegramEcosystem />
        <SectionDivider />
        <Communities />
        <SectionDivider />
        <SocialLinks />
        <SectionDivider />
        <Contact />
        <Footer />
        <BackToTop />
      </main>
    </>
  );
}
