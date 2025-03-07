import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/customCursor/CustomCursor";
import connectMongo from "@/db/dbConnect";
import DashboardAuthProvider from "@/provider/DashboardAuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "WebService",
  description:
    "We provide scalable, secure, and high-performance solutions to elevate your online presence.",
};

export default async function RootLayout({ children }) {
  await connectMongo();
  return (
    <html className="scroll-smooth" lang="en" suppressHydrationWarning>
      <body
        className={` bg-gray-50 ${geistSans.variable} ${geistMono.variable}`}
      >
        <CustomCursor />
        <DashboardAuthProvider>{children}</DashboardAuthProvider>
      </body>
    </html>
  );
}
