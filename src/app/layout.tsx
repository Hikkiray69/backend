import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Promo from "@/components/Promo";
import Catalog from "@/components/Catalog";
import Goods from "@/components/Goods";
import { Dir } from "fs";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });



export const metadata: Metadata = {
  title: "oner.ru",
  description: "Тестовый сайт для практики",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head className="head">
        <link rel="icon" href="./favicon.ico" />
      </head>
      <body className="body">
        <div className="container">
          {children}
          <Header/>
          <Promo/>
          <Catalog/>
          <Goods/>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
