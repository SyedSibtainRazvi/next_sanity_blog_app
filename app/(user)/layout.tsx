import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blogs | Syed Sibtain",
  description:
    "Personal blog platform where I share my thoughts on web development, programming, and tech insights. Built with Next.js and Sanity CMS.",
  keywords: [
    "web development",
    "programming",
    "Next.js",
    "React",
    "TypeScript",
    "Sanity CMS",
    "blog",
    "tech",
    "Syed Sibtain",
  ],
  authors: [{ name: "Syed Sibtain" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
