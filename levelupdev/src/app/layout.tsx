import type { Metadata } from "next";
import { Inter } from "next/font/google";
import TopNav from "./components/topNav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Levelup Dev - Learn Web Development",
  description:
    "A community of web developers and enthusiasts, who are passionate about learning and growing together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth focus:scroll-auto">
      <body className={inter.className}>
        <TopNav />
        {children}
        <ToastContainer /> {/* ToastContainer added inside the body tag */}
      </body>
    </html>
  );
}
