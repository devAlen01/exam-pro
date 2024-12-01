import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import LayoutClient from "./layout.client";
import LayoutSite from "@/components/layout/LayoutSite";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Todo App",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <LayoutClient>
          <LayoutSite>{children}</LayoutSite>
        </LayoutClient>
      </body>
    </html>
  );
}
