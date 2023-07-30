import {
  Desktop,
  HandWaving,
  HouseLine,
  IdentificationCard,
  Kanban,
  ReadCvLogo,
} from "@phosphor-icons/react";
import { useState } from "react";
import { NavBar } from "./Navbar";

const navBarItems = [
  { Icon: HouseLine, url: "/" },
  { Icon: IdentificationCard, url: "/#about" },
  { Icon: Desktop, url: "/#portfolio" },
  { Icon: Kanban, url: "/my-approach" },
  { Icon: HandWaving, url: "/#contact-me" },
  { Icon: ReadCvLogo, url: "/resume" },
];

export default function Header({ sectionName }: { sectionName: string }) {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div className="nav__bar col-span-full grid grid-cols-14 md:h-[120px] sticky top-0 z-20">
    <div
      className={`navbar__header_ bg-web-black w-full col-span-full grid grid-cols-6 z-20 md:rounded-[4px] md:col-start-6 lg:col-start-8 xl:col-start-9 self-end border-b border-b-primary border-opacity-30`}
    >
      {navBarItems.map((item, index) => (
        <NavBar
          key={index}
          url={item.url}
          getNavIcon={() => (
            <item.Icon
              weight="duotone"
              className={`h-[55px] w-[55px] text-icon-light py-3 group-hover:text-primary ${
                isActive && "text-primary"
              } col-start-${index}`}
            />
          )}
          isActive={isActive}
          isLeft={index === 0}
          isRight={index === navBarItems.length - 1}
        />
      ))}
    </div>
    </div>
  );
}
