import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { portfolioData } from "@utils/sectionData";
import SectionLayout from "@components/sectionContainer";
import { useRef } from "react";
import { ParagraphFadeIn, WordFadeIn } from "@components/FadeInComponents";

export default function PreAbout({ sectionName }: { sectionName: string }) {
  const textRef = useRef<HTMLDivElement>(null);

  //   const { scrollYProgress } = useScroll({
  //     target: textRef,
  //     offset: ["start .9", "start .4"],
  //   });

  const { scrollYProgress } = useScroll({
    target: textRef,
  });

  const opacity = useTransform(scrollYProgress, [0, 1, 1], [0, 1, 1]);
  const scale = useTransform(scrollYProgress, [0.8, 1, 0.8], [0.8, 1, 0]);

  const x = useTransform(scrollYProgress, [1, 0.4, 0], [0, 0, -1000]);
  const colorChange = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      "hsla(180, 7%, 75%, 0.9)",
      "hsla(180, 7%, 75%, 0.9)",
      "#f2994a",
      "#f2994a",
      "#f2994a",
      "#f2994a",
    ]
  );

  const sectionVariants = {
    initial: {
      opacity: 0,
      scale: 0.8,
      x: -200,
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 0.3,
        type: "keyframes",
        ease: "easeInOut",
      },
    },
    onExit: {
      opacity: 0.7,
      scale: 0.8,
    },
  };

  const { preAbout } = portfolioData;
  return (
    <SectionLayout sectionName={sectionName}>
      <AnimatePresence initial={false}>
        <motion.div className="w-full flex items-center justify-center sm:col-span-full py-10 ">
          <ParagraphFadeIn paragraph={preAbout.text3} />
        </motion.div>
      </AnimatePresence>
    </SectionLayout>
  );
}
