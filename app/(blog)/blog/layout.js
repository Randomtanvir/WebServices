import Navbar from "@/components/navbar/Navbar";
import "../../globals.css";
import FooterSection from "@/components/footer/FooterSection";

export default function BlogLayout({ children }) {
  return (
    <div>
      <Navbar role={false} />
      {children}
      <FooterSection />
    </div>
  );
}
