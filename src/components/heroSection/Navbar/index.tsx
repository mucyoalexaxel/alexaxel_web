import Link from "next/link";
import { ReactNode } from "react";

export interface NavBarIconContainerProps {
  url: string;
  getNavIcon: () => ReactNode;
  isLeft?: boolean;
  isRight?: boolean;
  isActive: boolean | false;
}

export const NavBar = ({
  url,
  isLeft,
  isRight,
  getNavIcon,
  isActive,
}: NavBarIconContainerProps) => {
  return (
    <Link
      href={url}
      className="group flex justify-items-center items-center flex-col"
    >
      <span
        className={`h-2 w-full group-hover:bg-gradient-to-b group-hover:from-transparent group-hover:to-primary group-hover:rounded-tl-lg group-hover:filter group-hover:blur-[2px] ${
          isActive &&
          "bg-gradient-to-b from-transparent to-primary filter blur-[2px] "
        } ${isLeft && "rounded-tl-lg"} ${isRight && "rounded-tr-lg"}`}
      />
      {getNavIcon()}
    </Link>
  );
};
