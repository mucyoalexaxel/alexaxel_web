import Link from "next/link";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function TextContainer() {
  const rightText = useRef(null);
  const leftText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      // x: "0px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(rightText.current, { xPercent: xPercent });
    gsap.set(leftText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };

  return (
    <div className="col-span-full md:col-start-1 md:col-end-6 z-10">
      <div className="flex flex-col text-left my-16">
        <p className="text-[#F3FCEE] text-4xl lg:text-6xl font-bold capitalize tracking-widest mb-5">
          Hi, I&apos;m{" "}
          <span className="">
            Alex<span className="text-primary-goldish text-5xl">.</span>
          </span>
        </p>

        <span className="text-primary-goldish opacity-80 font-extralight tracking-widest text-sm mb-1 md:text-right md:text-lg">Full Stack Developer</span>
        <span className="text-primary-goldish opacity-80 font-extralight tracking-widest text-sm mb-1 md:text-right md:text-lg">Freelancer</span>

        {/* <p className="text-[#F3FCEE] text-base md:text-lg  font-light mb-4">
          I&apos;m a <span></span> Driven by the mission to deliver software
          that truly serves your needs, I leverage modern technologies and
          industry best practices.
        </p> */}

        <div className="mt-5 flex flex-col sm:flex-row items-start">
          <Link
            href={"/contact"}
            className="border-1 w-fit border-white py-2 px-4 text-white hover:border-2 hover:border-primary-goldish hover:text-primary-goldish"
          >
            Say Hi 👋
          </Link>
        </div>
      </div>

      {/* @mucyoalexaxel fix this a Marquee */}
      <div
        ref={slider}
        className="whitespace-nowrap absolute bottom-0 left-0 flex gap-2 w-full overflow-hidden text-[#F3FCEE] text-[4rem] lg:text-[6rem] font-thin uppercase tracking-normal"
      >
        <p ref={rightText}>
          <span className="text-primary-goldish font-light">
            Quality Software
          </span>{" "}
          To Every Place You Want -
        </p>
        <p ref={leftText}>
          <span className="text-primary-goldish font-light">
            Quality Software
          </span>{" "}
          To Every Place You Want -
        </p>
      </div>
      {/* <div className="text-[#F3FCEE] text-3xl lg:text-5xl font-bold capitalize tracking-wider bg-red-200 absolute bottom-0 left-0 w-full overflow-x-hidden">
        delivering <span className="text-secondary">quality software</span> to
        every place <span className="text-secondary">you want</span>
      </div> */}
    </div>
  );
}

// Each application I create is a fusion of functionality, efficiency,
//           and user-centric design. Together, let&apos;s transform your vision
//           into a digital reality that captivates users and drives business
//           growth
