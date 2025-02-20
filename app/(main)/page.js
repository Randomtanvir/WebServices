import AboutSection from "@/components/about/AboutSection";
import Contact from "@/components/contact/Contact";
import HeroArea from "@/components/heroSection/HeroArea";
import ServicesSection from "@/components/services/ServicesSection";
import TeamSection from "@/components/team/TeamSection";

export default function Home() {
  return (
    <>
      <HeroArea />
      <ServicesSection />
      <TeamSection />
      <AboutSection />
      <Contact />
    </>
  );
}
