import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import MainHeader from "@/shared/components/Navigation/MainHeader";
import Footer from "@/shared/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevNotes - Your Moder Notes App",
  description: "DevNotes allows you to create, modify and delete your notes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MainHeader />
        <main className="bg-slate-50 min-h-full w-full p-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
