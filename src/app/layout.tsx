import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Epitech Code Hub",
  description:
    "A hub for Epitech students to collaborate and create projects together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen gap-4 m-5 p-5">
        <Navbar />
        <main className="">
          {children}
          </main>
        <Footer />
      </body>
    </html>
  );
}
