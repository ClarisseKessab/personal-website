/*  app/layout.tsx  */
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import RootLayout from "./RootLayout";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Script from "next/script";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clarisse K - Développeuse Front",
  description:
    "Clarisse Kessab, freelance intégratrice web et développeuse front-end. Sites modernes, performants et optimisés SEO.",
  openGraph: {
    title: "Clarisse K - Développeuse Front",
    description:
      "Clarisse, développeuse front à Nantes, spécialisée en création de sites web modernes et performants. Découvrez mes projets et mon expertise technique.",
    images: [
      {
        url: "/image-website-share.png",
        width: 1200,
        height: 630,
        alt: "Website développeuse front",
      },
    ],
    type: "website",
  },
};

export const viewport = { width: "device-width", initialScale: 1 };

// IDs de suivi
const GA_ID  = "G-6EQ9MH1JPJ";
const ADS_ID = "AW-17031568396";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen h-full`}
        suppressHydrationWarning
      >
        {/* Charge la librairie gtag */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        />

        {/* Initialise GA4 + Google Ads + fonction de conversion Calendly */}
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              /* Google Analytics 4 */
              gtag('config', '${GA_ID}', { page_path: window.location.pathname });

              /* Google Ads (remarketing) */
              gtag('config', '${ADS_ID}');

              /* Conversion : prise de rendez-vous Calendly */
              window.gtag_report_conversion = function (url) {
                const cb = () => { if (url) window.location = url; };
                gtag('event', 'conversion', {
                  send_to : 'AW-17031568396/0gfFCNHwhr0aEIy4pLk_',
                  value   : 1.0,
                  currency: 'EUR',
                  event_callback: cb,
                });
                return false;
              };
            `,
          }}
        />

        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
