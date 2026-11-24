import type { Metadata } from "next";
import "./globals.css";
import MusicRadio from "@/components/MusicRadio";
import PageLoader from "@/components/PageLoader";

export const metadata: Metadata = {
  title: "Personal Portfolio",
  description: "Engineering, development, and music.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PageLoader />
        {children}
        <MusicRadio />
      </body>
    </html>
  );
}
