import type { Metadata, Viewport } from "next";
import { DM_Sans, Libre_Caslon_Display } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

// Self-hosted at build time by next/font (no request to Google from the visitor's browser).
const sans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});
const serif = Libre_Caslon_Display({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Canty Tours — Kerala holidays, at your pace",
  description:
    "Make Kerala your next escape with Canty Tours. Explore Munnar, Alleppey, Thekkady, Wayanad and the coast, compare Kerala itineraries, or plan a holiday across India.",
};

export const viewport: Viewport = {
  themeColor: "#193e36",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
