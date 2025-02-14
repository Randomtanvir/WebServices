import AboutSection from "@/components/about/AboutSection";
import Contact from "@/components/contact/Contact";

import HeroArea from "@/components/heroSection/HeroArea";

import Navbar from "@/components/navbar/Navbar";
import ServicesSection from "@/components/services/ServicesSection";
import TeamSection from "@/components/team/TeamSection";

export default function Home() {
  return (
    <>
      <div className="relative">
        {/* <Navbar /> */}
        <HeroArea />

        <ServicesSection />
        <TeamSection />
        <AboutSection />
        <Contact />
      </div>
    </>
  );
}
