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

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL("https://bibliotherapy.vercel.app/"),
    title: "BiblioTherapy",
    applicationName: "BiblioTherapy",
    creator: "Florian Cochard",
    description: "Your digital book assistant",
    icons: {
      icon: "/icon.png",
      shortcut: "/icon.png",
    },
    keywords: ["book", "story", "therapy", "mental health", "mental health support", "mental health therapy"],
    alternates: {
      canonical: "https://bibliotherapy.vercel.app/",
      languages: {
        "en-US": "https://bibliotherapy.vercel.app/",
      },
    },
    category: "productivity",
    openGraph: {
      title: "BiblioTherapy",
      description: "Your digital book assistant",
      type: "website",
      url: "https://bibliotherapy.vercel.app/",
      locale: "en_US",
      siteName: "BiblioTherapy",
      images: [{ url: "/icon.png" }],
    },
    twitter: {
      title: "BiblioTherapy",
      description: "Your digital book assistant",
      card: "summary_large_image",
      site: "@flocochard",
      images: ["/icon.png"],
    },
    referrer: "no-referrer",
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
    manifest: "/manifest.webmanifest",
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
