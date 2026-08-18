import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import { profile } from "@/content/site";
import "./globals.css";

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const display = Instrument_Serif({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: profile.metaDescription,
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.metaDescription,
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${body.variable} ${display.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
