"use client";

import DottedGrid from "@assets/webIcons/dottedGrid.svg";
import { DetailButton } from "@components/heroSection";
import "../styles/global.css";
import { Providers } from "./providers";
import { NavBar, Header } from "@components/Header";
import Footer from "@components/Footer";
import { AnimatePresence } from "framer-motion";

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
                {/* <Header /> */}
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
