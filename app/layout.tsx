"use client";

import Footer from "@components/Footer";
import { NavBar } from "@components/Header";
import { AnimatePresence } from "framer-motion";
import "../styles/global.css";
import { Providers } from "./providers";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#111]">
        <Providers>
          <AnimatePresence initial={false}>
            <div className="w-full scroll-smooth flex overflow-x-clip relative">
              <NavBar sectionName="NavBar" />
              <div className="flex flex-col relative w-full flex-wrap mx-auto 2xl:max-w-[80dvw]">
                <div className="w-full relative">{children}</div>
                <Footer />
              </div>
            </div>
          </AnimatePresence>
        </Providers>
      </body>
    </html>
  );
}
