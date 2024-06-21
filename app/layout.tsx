import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { dbConfig } from "@/utils/dbconfig";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Product Information",
  description: "Generated by Product Information",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await dbConfig();
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
