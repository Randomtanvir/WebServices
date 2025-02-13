import "../../globals.css";
import DashNavbar from "../_components/DashNavbar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function DashboardLayout({ children }) {
  const session = await auth();
  if (session === null || session?.user?.role !== "admin") {
    redirect("/");
  }

  return (
    <div className="bg-gray-100 min-h-screen flex">
      <DashNavbar user={session?.user} />
      <main className="flex-grow p-10">{children}</main>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
