import type { Metadata, Viewport } from "next";
import { Montserrat, Pinyon_Script } from "next/font/google";
import "./globals.css";
import MusicPlayer from "./components/MusicPlayer";

const pinyonScript = Pinyon_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pinyon",
  display: "swap",
});

const montserrat = Montserrat({ 
  subsets: ["latin", "cyrillic"], 
  weight: ["300", "400", "500"],
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
    <html lang="en" className={`${pinyonScript.variable} ${montserrat.variable}`}>
      <body>
        {children}
        <MusicPlayer />
      </body>
    </html>
  );
}
