import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

const SITE_ORIGIN = "https://iosif1070.github.io";
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";
const SITE_URL = `${SITE_ORIGIN}${BASE_PATH}`;
const OG_IMAGE = `${SITE_URL}/og-image.png`;
const TITLE = "Iosif Placinta — Dessinateur en construction";
const DESCRIPTION =
  "Étudiant en technique de qualification — dessinateur en construction. Lycée la Retraite, Bruxelles. À la recherche d'un stage ou d'un job étudiant.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Iosif Placinta",
    locale: "fr_BE",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Iosif Placinta — Dessinateur en construction",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0e1a",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${display.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
