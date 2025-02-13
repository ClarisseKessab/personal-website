import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clarisse K - Développeuse Front-End",
  description: "Clarisse, développeuse fullstack à Nantes, spécialisée en création de sites web modernes et performants. Découvrez mes projets et mon expertise technique.",
  openGraph: {
    title: 'Clarisse K - Développeuse Front-End',
    description: 'Clarisse, développeuse fullstack à Nantes, spécialisée en création de sites web modernes et performants. Découvrez mes projets et mon expertise technique.',
    images: [
      {
        url: '../../public/image-website-share.jpg',
        width: 1200,
        height: 630,
        alt: 'Développeur fullstack - Illustration',
      },
    ],
    type: 'website',
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className="h-full">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen h-full`}>
        <Navbar />
        <main className="children flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
