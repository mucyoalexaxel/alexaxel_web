"use client";

import DottedGrid from "@assets/webIcons/dottedGrid.svg";
import { DetailButton, Header } from "@components/heroSection";
import "../styles/global.css";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-web-black">
        <Providers>
          <div className="snap-y snap-mandatory overflow-y-scroll h-[100dvh] w-full grid justify-items-center bg-web-black">
            <div className="w-full md:w-[90%] xl:w-4/5 grid grid-cols-14 relative px-5 md:px-0">
              <Header sectionName={""} />
              <div className="w-full col-span-full flex flex-col gap-1">
                {/* @mucyoalexaxel Remember to Remove gap-1 in the syles above */}
                {children}
              </div>
              <DottedGrid className="hidden md:block fixed top-0 backdrop-blur-sm" />
              <DottedGrid className="fixed bottom-0 backdrop-blur-sm z-10" />
              <DetailButton />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
