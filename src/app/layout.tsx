// layout.tsx (serveur)
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import RootLayout from "./RootLayout";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Script from "next/script";


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
  description:
    "Clarisse, développeuse fullstack à Nantes, spécialisée en création de sites web modernes et performants. Découvrez mes projets et mon expertise technique.",
  openGraph: {
    title: "Clarisse K - Développeuse Front-End",
    description:
      "Clarisse, développeuse fullstack à Nantes, spécialisée en création de sites web modernes et performants. Découvrez mes projets et mon expertise technique.",
    images: [
      {
        url: "/image-website-share.jpg",
        width: 1200,
        height: 630,
        alt: "Développeur fullstack - Illustration",
      },
    ],
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

const GA_TRACKING_ID = "G-6EQ9MH1JPJ";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen h-full` }
        suppressHydrationWarning
      >
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
