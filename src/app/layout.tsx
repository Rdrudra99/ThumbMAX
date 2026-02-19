import type { Metadata, Viewport } from "next";
import "./globals.css";
import { APP_NAME, APP_DESCRIPTION } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${APP_NAME} - Download YouTube Thumbnails in High Quality`,
  description: APP_DESCRIPTION,
  keywords: [
    "youtube thumbnail downloader",
    "download youtube thumbnail",
    "youtube thumbnail",
    "high quality thumbnail",
    "free thumbnail downloader",
    "youtube thumbnail extractor",
  ],
  authors: [{ name: APP_NAME }],
  creator: APP_NAME,
  publisher: APP_NAME,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thumbmax.example.com",
    title: `${APP_NAME} - Download YouTube Thumbnails in High Quality`,
    description: APP_DESCRIPTION,
    siteName: APP_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: `${APP_NAME} - Download YouTube Thumbnails in High Quality`,
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ef4444",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
