import Navbar from "@/components/navbar/Navbar";
import "../globals.css";
import FooterSection from "@/components/footer/FooterSection";
import { auth } from "@/auth";
import { Toaster } from "react-hot-toast";

export default async function MainLayout({ children }) {
  const secssion = await auth();
  return (
    <div>
      <Navbar user={secssion?.user} />
      {children}
      <FooterSection />
      <Toaster />
    </div>
  );
}
