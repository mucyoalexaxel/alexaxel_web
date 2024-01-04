import {
  Desktop,
  HandWaving,
  HouseLine,
  IdentificationCard,
  Kanban,
  ReadCvLogo,
} from "@phosphor-icons/react";
import { useState } from "react";
import { NavBar } from "../heroSection/Navbar";
import { ThemeSwitcher } from "@components/Header/ThemeSwitcher";

const navBarItems = [
  { Icon: IdentificationCard, url: "#about", navText: "About" },
  { Icon: Kanban, url: "/my-approach", navText: "Exp." },
  { Icon: Desktop, url: "#portfolio", navText: "Projects" },
  { Icon: HandWaving, url: "#contact-me", navText: "Contact" },
  { Icon: ReadCvLogo, url: "/resume", navText: "Resume" },
];
// @mucyoalexaxel make a model component for your online resume and link it here. 
// @mucyoalexaxel here is inspiration https://www.youtube.com/watch?v=n8lbgOB87Bg&list=TLPQMDMwMTIwMjSikmCH3pLwhw&index=2&pp=gAQBiAQB

export default function Navbar({ sectionName }: { sectionName: string }) {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <nav className="bg-black flex items-center h-[100dvh] z-20 flex-col overflow-y-scroll sticky left-0 top-0 w-[10rem] hideScrollBar">
      {/* <ThemeSwitcher /> */}
      {/* @mucyoalexaxel Fix this logo element */}
      <span className="flex-shrink-0 w-[45px] h-[45px] flex items-center justify-center bg-web-dark rounded my-5 scroll-pt-[-5]">
        B<span>.</span>
      </span>
      {navBarItems.map((item, index) => (
        <NavBar
          key={index}
          url={item.url}
          navText={item.navText}
          getNavIcon={() => (
            <item.Icon
              weight="duotone"
              className={`h-[55px] w-[55px] text-icon-light py-3 group-hover:text-primary ${
                isActive && "text-primary"
              }`}
            />
          )}
          isActive={isActive}
        />
      ))}
    </nav>
  );
}
