import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Iosif Placinta — Dessinateur en construction",
  description:
    "Étudiant en technique de qualification — dessinateur en construction. Lycée la Retraite, Bruxelles. À la recherche d'un stage ou d'un job étudiant.",
  openGraph: {
    title: "Iosif Placinta — Dessinateur en construction",
    description:
      "Portfolio étudiant — dessinateur en construction. Bruxelles.",
    locale: "fr_BE",
    type: "website",
  },
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
