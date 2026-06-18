import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Content Marketing Strategist | Portfolio",
  description: "Portfolio of a Content Marketing Expert with 5+ years of experience in SEO, copywriting, and digital marketing strategy.",
  keywords: ["Content Marketing", "SEO", "Copywriting", "Digital Strategy", "Portfolio"],
  openGraph: {
    title: "Content Marketing Strategist | Portfolio",
    description: "Portfolio of a Content Marketing Expert with 5+ years of experience in SEO, copywriting, and digital marketing strategy.",
    url: "https://content-portfolio.example.com",
    siteName: "Content Marketing Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Content Marketing Strategist | Portfolio",
    description: "Portfolio of a Content Marketing Expert with 5+ years of experience in SEO, copywriting, and digital marketing strategy.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
