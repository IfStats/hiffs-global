import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hiffs Global Enterprises | Technology & Innovation",
  description:
    "Hiffs Global Enterprises is a technology and innovation group building software, AI, data intelligence, digital platforms and emerging technology.",
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