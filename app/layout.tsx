import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OPUS Social Welfare Foundation - Seva Se Samriddhi",
  description:
    "Dedicated to the Service of Society. OPUS Social Welfare Foundation works towards education, youth development, and community empowerment through innovative programs and initiatives.",
  icons: {
    icon: [
      {
        url: "/images/favicon.ico",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/images/favicon.ico",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/images/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background scroll-smooth">
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
