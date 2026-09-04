import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hiffsglobal.com"),

  title: {
    default: "Hiffs Global Enterprises | Technology & Innovation",
    template: "%s | Hiffs Global Enterprises",
  },

  description:
    "Hiffs Global Enterprises is a technology and innovation group building software, artificial intelligence, data intelligence, digital platforms and emerging technology.",

  keywords: [
    "Hiffs Global Enterprises",
    "Hiffs Global",
    "Hiffs Tech",
    "Artificial Intelligence",
    "Software Engineering",
    "Data Intelligence",
    "Business Intelligence",
    "Enterprise Technology",
    "Digital Transformation",
    "Technology Innovation",
  ],

  authors: [
    {
      name: "Hiffs Global Enterprises",
    },
  ],

  creator: "Hiffs Global Enterprises",
  publisher: "Hiffs Global Enterprises",

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hiffsglobal.com",
    siteName: "Hiffs Global Enterprises",
    title: "Hiffs Global Enterprises | Technology & Innovation",
    description:
      "Building intelligent systems for a digital future.",
    images: [
      {
        url: "/hiffs-global-icon.png",
        width: 512,
        height: 512,
        alt: "Hiffs Global Enterprises",
      },
    ],
  },

  twitter: {
    card: "summary",
    title: "Hiffs Global Enterprises | Technology & Innovation",
    description:
      "Building intelligent systems for a digital future.",
    images: ["/hiffs-global-icon.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}