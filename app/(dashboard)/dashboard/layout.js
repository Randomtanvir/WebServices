import "../../globals.css";
import DashNavbar from "../_components/DashNavbar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function DashboardLayout({ children }) {
  return (
    <div className="bg-gray-100 min-h-screen flex">
      <DashNavbar />
      <main className="flex-grow p-10">{children}</main>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
