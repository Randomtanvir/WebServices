import "../../globals.css";
import FooterSection from "@/components/footer/FooterSection";
import CommonNavbar from "@/components/common/CommonNavbar";

export default function ProjectLayout({ children }) {
  return (
    <div>
      <CommonNavbar />
      {children}
      <FooterSection />
    </div>
  );
}
