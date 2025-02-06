import "../../globals.css";
import DashNavbar from "../_components/DashNavbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="bg-gray-100 min-h-screen flex">
      <DashNavbar />
      <main className="flex-grow p-10">{children}</main>
    </div>
  );
}
