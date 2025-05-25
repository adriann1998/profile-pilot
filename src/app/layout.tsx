import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ErrorBoundary } from "@/components/error-boundary";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adrian Angkajaya  | Software Engineer",
  metadataBase: new URL("https://adrianangkajaya.com"),
  openGraph: {
    title: "Adrian Angkajaya  | Software Engineer",
    description: "Adrian Angkajaya is a Software Engineer with a passion for building scalable and efficient web applications.",
    url: "https://adrianangkajaya.com",
    siteName: "Adrian Angkajaya",
    images: [
      {
        url: "https://adrianangkajaya.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Adrian Angkajaya | Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ErrorBoundary>
          <TooltipProvider>
            {children}
          </TooltipProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
