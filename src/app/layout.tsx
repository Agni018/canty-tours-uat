import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

// Self-hosted at build time by next/font (no request to Google from the visitor's browser).
// Both are variable fonts; "opsz" picks the optical size automatically for each font size.
const serif = Fraunces({
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-serif",
});
const sans = Inter({
  subsets: ["latin", "latin-ext"],
  axes: ["opsz"],
  variable: "--font-sans",
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
