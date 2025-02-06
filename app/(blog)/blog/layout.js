import Navbar from "@/components/navbar/Navbar";
import "../../globals.css";
import FooterSection from "@/components/footer/FooterSection";
import CommonNavbar from "@/components/common/CommonNavbar";

export default function BlogLayout({ children }) {
  return (
    <div>
      <CommonNavbar />
      {children}
      <FooterSection />
    </div>
  );
}
