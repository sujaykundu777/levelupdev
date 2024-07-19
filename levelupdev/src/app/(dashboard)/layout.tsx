import "../globals.css";
import { Inter } from "next/font/google";
import TopNav from "../components/topNav";
import type { Metadata } from "next";
import { auth } from "@/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Levelupdev Admin - Community of Web Developers",
  description:
    "A community of web developers and enthusiasts, who are passionate about learning and growing together.",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await auth();
  return (
    <html lang="en" className="h-full scroll-smooth focus:scroll-auto">
      <body className={inter.className}>
        <div className="h-full scroll-smooth focus:scroll-auto">
          <TopNav user={session?.user} />
          {children}
        </div>
      </body>
    </html>
  );
}
