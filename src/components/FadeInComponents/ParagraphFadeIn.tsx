import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export default function ParagraphFadeIn({ paragraph }: { paragraph: string }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start .9", "start 0.3"],
  });

  const sectionVariants = {
    initial: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.4,
      },
    },
    onExit: {
      opacity: 0.8,
      scale: 0.8,
    },
  };

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <motion.p
      ref={container}
      className="flex flex-wrap text-2xl xsm:text-3xl text-center capitalize tracking-wide leading-snug font-medium"
      style={{ opacity }}
      // variants={sectionVariants}
      // initial="initial"
      // whileInView="visible"
      // exit="onExit"
    >
      {paragraph}
    </motion.p>
  );
}
