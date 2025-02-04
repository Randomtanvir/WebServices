import Navbar from "@/components/navbar/Navbar";
import "../globals.css";
import FooterSection from "@/components/footer/FooterSection";

export default function MainLayout({ children }) {
  return (
    <div>
      <Navbar role={true} />
      {children}
      <FooterSection />
    </div>
  );
}
