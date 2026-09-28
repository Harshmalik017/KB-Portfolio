import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kausik Kumar Bhadra | Portfolio",
  description: "Portfolio of Kausik Kumar Bhadra.",
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
