import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import RevealObserver from "@/components/RevealObserver";

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sharnibrar.com"),
  title: {
    default: "Sharni Brar — Graphic Designer, Video Creator & AI Visuals",
    template: "%s | Sharni Brar",
  },
  description:
    "Sharni Brar is a graphic designer and video creator specializing in posters, AI visuals, and music video edits — trusted by T-Series, White Hill Music, Young Nation Studios and more.",
  keywords: [
    "Sharni Brar",
    "graphic designer",
    "video creator",
    "AI visuals",
    "Punjabi music poster designer",
    "music video editor",
  ],
  openGraph: {
    title: "Sharni Brar — Graphic Designer, Video Creator & AI Visuals",
    description:
      "Posters, AI visuals and music video edits for artists and labels including T-Series, White Hill Music and Young Nation Studios.",
    url: "https://sharnibrar.com",
    siteName: "Sharni Brar",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <RevealObserver />
      </body>
    </html>
  );
}
