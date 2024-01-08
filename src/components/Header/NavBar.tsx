import {
  Desktop,
  HandWaving,
  HouseLine,
  IdentificationCard,
  Kanban,
  ReadCvLogo,
} from "@phosphor-icons/react";
import { useState } from "react";
import { NavBar } from "./NavBarItem";
import { ThemeSwitcher } from "@components/Header/ThemeSwitcher";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";

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

  const { scrollYProgress } = useScroll();

  return (
    <nav className="bg-black flex items-center h-[100dvh] z-20 flex-col overflow-y-scroll sticky left-0 top-0 bottom-0 min-w-[55px] hideScrollBar">
      {/* <ThemeSwitcher /> */}
      <Link
        href={"/"}
        className="flex-shrink-0 flex items-center justify-center bg-web-dark rounded my-5 px-1 py-3 navbar_vertical_logo"
      >
        <span className="text-[#F3FCEE] text-base font-bold capitalize tracking-widest">
          MCY
        </span>
        <span className="text-primary-goldish text-2xl">.</span>
      </Link>
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
      {/* @mucyoalexaxel Look Into this Scroll Progress */}
      <motion.div
        className="w-[1px] absolute right-0 top-0 bg-transparent bg-opacity-80"
        style={{ height: scrollYProgress, scaleY: scrollYProgress }}
      />
    </nav>
  );
}
