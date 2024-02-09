import Link from "next/link";
import { ReactNode } from "react";

export interface NavBarIconContainerProps {
  url: string;
  getNavIcon: () => ReactNode;
  navText: string;
  isActive: boolean | false;
}

export const NavBar = ({
  url,
  navText,
  getNavIcon,
  isActive,
}: NavBarIconContainerProps) => {
  return (
    <Link
      href={url}
      className="group h-[100px] w-full flex flex-shrink-0 items-center justify-center navbar_vertical hover:opacity-100 hover:border-l-primary-goldish hover:bg-web-black hover:bg-opacity-20"
    >
      <span className="group-hover:text-primary-white">{navText}</span>
      {/* <span className="mb-1">{getNavIcon()}</span> */}
    </Link>
  );
};
