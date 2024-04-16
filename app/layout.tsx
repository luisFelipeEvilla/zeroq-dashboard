import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Header from "@/components/Header/Header";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZeroQ Centro de mando",
  description: "Centro de mando ZeroQ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary min-h-screen`}>
        <Header />
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
