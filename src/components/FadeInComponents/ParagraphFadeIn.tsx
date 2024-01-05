import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParagraphFadeIn({ paragraph }: { paragraph: string }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start .9", "start 0.3"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <motion.p ref={container} className="flex text-3xl p-[40px] w-max-full text-white flex-wrap" style={{ opacity }}>
      {paragraph}
    </motion.p>
  );
}
