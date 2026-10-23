import type { Metadata, Viewport } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

// Self-hosted at build time by next/font (no request to Google from the visitor's browser).
// Both are variable fonts, so every weight the CSS asks for is available.
const serif = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});
const sans = Montserrat({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Canty Tours — Kerala holidays, at your pace",
  description:
    "Make Kerala your next escape with Canty Tours. Explore Munnar, Alleppey, Thekkady, Wayanad and the coast, compare Kerala itineraries, or plan a holiday across India.",
};

export const viewport: Viewport = {
  themeColor: "#0b3b2e",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
