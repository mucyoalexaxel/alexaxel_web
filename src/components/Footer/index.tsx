import { GithubLogo, LinkedinLogo, Envelope } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  const getYear = () => new Date().getFullYear();
  return (
    <motion.div className="w-full flex flex-col px-5 pt-10 pb-3 bg-black gap-5">
      <div className="flex justify-between items-center">
        <motion.p className="flex-shrink-0 flex items-center justify-center bg-web-dark rounded p-3">
          <span className="text-[#F3FCEE] text-base font-bold capitalize tracking-widest">
            MCY
          </span>
          <span className="text-primary-goldish text-2xl">.</span>
        </motion.p>
        <motion.div className="flex flex-col gap-3 md:gap-5 items-center justify-center">
          <motion.span
            onTap={() => scrollTo({ top: 0, behavior: "smooth" })}
            className="w-full text-center text-base text-gray-400 tracking-wide font-[400] capitalize cursor-pointer hover:text-primary-goldish transition-all ease-in-out"
          >
            back to top
          </motion.span>
          <motion.div className="flex gap-3 md:gap-5">
            <Link
              className="group"
              href={"https://www.linkedin.com/in/alexaxelmucyo/"}
              target="_blank"
            >
              <LinkedinLogo
                weight="duotone"
                className="h-8 w-8 text-white group-hover:text-primary-goldish"
              />
            </Link>
            <Link
              className="group"
              href={"https://github.com/mucyoalexaxel"}
              target="_blank"
            >
              <GithubLogo
                weight="duotone"
                className="h-8 w-8 text-white group-hover:text-primary-goldish"
              />
            </Link>
            <Link
              className="group"
              href={"mailto:mucyoalexaxel@gmail.com"}
              target="_blank"
            >
              <Envelope
                weight="duotone"
                className="h-8 w-8 text-white group-hover:text-primary-goldish"
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <span className="w-full text-center text-xs text-gray-400 tracking-widest font-medium">
        &copy;<span>{getYear()}</span> Alex Axel Mucyo 
      </span>
    </motion.div>
  );
}
