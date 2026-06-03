import type { Metadata } from "next";

import { Inter, Inter_Tight } from "next/font/google";

import "./globals.css";

import { Analytics } from "@vercel/analytics/react";

import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";

import { constructMetadata } from "@/lib/metadata";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata =
  constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${interTight.variable}`}
    >
      <body className="bg-[#f8fbff] text-slate-950 antialiased">

        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>

        <Analytics />
      </body>
    </html>
  );
}
