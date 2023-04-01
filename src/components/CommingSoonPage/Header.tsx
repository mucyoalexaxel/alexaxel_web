import Image from "next/image";
import LogoWhite from "@assets/alex-dev-logo-white.svg";

const Header = () => {
  return (
    <div className="text-white h-max w-full absolute top-0 left-0 flex justify-center">
      <Image src={LogoWhite} height={400} width={400} alt={""} />
    </div>
  );
};

export default Header;
