import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { connectDb } from "@/lib/db/mongo.db";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog App",
  description: "Blog app with server actions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  connectDb();
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
