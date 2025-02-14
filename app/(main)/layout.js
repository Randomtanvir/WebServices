import Navbar from "@/components/navbar/Navbar";
import "../globals.css";
import FooterSection from "@/components/footer/FooterSection";
import { auth } from "@/auth";

export default async function MainLayout({ children }) {
  const secssion = await auth();
  return (
    <div className="relative">
      <Navbar user={secssion?.user} />
      {children}
      <FooterSection />
    </div>
  );
}
