import Link from "next/link";

export default function TextContainer() {
  return (
    <div className="col-span-full md:col-start-1 md:col-end-6 z-10 w-full">
      <div className="flex flex-col text-left">
        <p className="text-[#F3FCEE] text-4xl lg:text-6xl font-bold capitalize tracking-widest mb-5">
          Hi, I&apos;m{" "}
          <span className="">
            Alex<span className="text-primary-goldish text-5xl">.</span>
          </span>
        </p>

        <span className="text-primary-goldish opacity-90 font-extralight tracking-widest text-sm mb-1 md:text-lg">
          Full Stack Developer
        </span>
        <span className="text-primary-goldish opacity-90 font-extralight tracking-widest text-sm mb-1 md:text-lg">
          Freelancer
        </span>

        <Link
          href={"/contact"}
          className="mt-5 border-1 w-fit border-white py-2 px-4 text-white hover:border-1 hover:border-primary-goldish hover:text-primary-goldish"
        >
          Say Hi 👋
        </Link>
      </div>
    </div>
  );
}
