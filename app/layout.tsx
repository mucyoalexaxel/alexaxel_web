"use client";

import DottedGrid from "@assets/webIcons/dottedGrid.svg";
import { DetailButton } from "@components/heroSection";
import "../styles/global.css";
import { Providers } from "./providers";
import { NavBar, Header } from "@components/Header";
import Footer from "@components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#111]">
        <Providers>
          <div className="w-full mx-auto 2xl:max-w-[80dvw] scroll-smooth flex">
            <NavBar sectionName="NavBar" />
            <div className="flex flex-col relative w-full flex-wrap">
              {/* <Header /> */}
              <div className="w-full relative">{children}</div>
              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
