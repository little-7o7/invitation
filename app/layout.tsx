import type { Metadata, Viewport } from "next";
import { Montserrat, Great_Vibes, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import MusicPlayer from "./components/MusicPlayer";

// Handwritten script font for names — elegant, romantic cursive
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
  display: "swap",
});

// Romantic Italian serif for headings, body text, and accents
const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

// Minimal sans-serif for small uppercase tracking labels
const montserrat = Montserrat({ 
  subsets: ["latin", "cyrillic"], 
  weight: ["200", "300", "400"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maxmudxon & Dilovarxon",
  description: "Wedding Invitation",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${greatVibes.variable} ${cormorantGaramond.variable} ${montserrat.variable}`}>
      <body>
        {children}
        <MusicPlayer />
      </body>
    </html>
  );
}
