import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Is Dave In It? | Dave Bautista Movie Checker",
  description:
    "Quickly check if Dave Bautista (Drax) is in any movie or TV show. Fun, fast, and zero nonsense.",
  openGraph: {
    title: "Is Dave In It?",
    description: "Is Dave Bautista in that movie? Find out instantly.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Is Dave In It?",
    description: "Is Dave Bautista in that movie? Find out instantly.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-grid">{children}</body>
    </html>
  );
}
