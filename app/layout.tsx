import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Student Course Dashboard",
  description: "A simple dashboard for courses and students",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-50 dark:bg-black min-h-screen flex flex-col`}
      >
        <Navbar />

        <div className="flex w-full flex-1 overflow-visible">
          <Sidebar />

          <main className="flex-1 px-4 py-8">
            {children}
          </main>
        </div>

        <Footer />
      </body>
    </html>
  );
}
