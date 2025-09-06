import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Providers } from "./Provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lexica – AI Report & Document Generator",
  description:
    "Lexica helps students, professionals, and creators transform raw ideas into polished reports and documents instantly with AI.",
   icons: {
    icon: "/icon.svg", 
   
  },
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
        <>
          <Providers>
            <Navbar />
            {children}
          </Providers>
          <Footer />
        </>
      </body>
    </html>
  );
}

    
