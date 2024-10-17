import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";
import { Navbar } from "../components/layouts/header/Navbar";
import Footer from "@/components/layouts/Footer";
import {PrivateLayout} from "../components/layouts/PrivateLayout"


const outfit = Outfit({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Beat The Bugs",
  description: "On ne caisse pas les codes, on caisse les bugs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${outfit.className} antialiased`}>
        <div className="flex pt-2 flex-col min-h-screen bg-white dark:bg-gray-900">
          <Navbar/>
          <PrivateLayout>{children}</PrivateLayout>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
