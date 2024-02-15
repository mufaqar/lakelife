import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GlobalProvides from '@/context/globalContext'

// Import Swiper styles
import 'swiper/css';
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lake Life Style",
  description: "All about Life Style",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <GlobalProvides>
          {children}
        </GlobalProvides>
        <Footer />
      </body>
    </html>
  );
}
