import Link from "next/link";

export default function TextContainer() {
  return (
    <div className="col-span-full md:col-start-1 md:col-end-9 z-10">
      <div className="flex flex-col text-center md:text-left gap-6">
        <p className="text-[#F3FCEE] text-3xl lg:text-5xl font-bold capitalize tracking-wider">
          delivering <span className="text-secondary">quality software</span> to
          every place <span className="text-secondary">you want</span>
        </p>

        <p className="text-[#F3FCEE] text-base md:text-lg  font-light">
          Driven by the mission to deliver software that truly serves your
          needs, I leverage modern technologies and industry best practices.
        </p>
        <div className="flex flex-row gap-5 self-center md:self-start">
          <Link
            href={"/my-approach"}
            className="border-2 w-fit border-secondary rounded-md py-2 px-4 text-secondary"
          >
            Learn More
          </Link>
          <Link
            href={"/contact"}
            className="border-2 w-fit border-secondary rounded-md py-2 px-4 text-secondary"
          >
            Say Hi 👋
          </Link>
        </div>
      </div>
    </div>
  );
}

// Each application I create is a fusion of functionality, efficiency,
//           and user-centric design. Together, let&apos;s transform your vision
//           into a digital reality that captivates users and drives business
//           growth
