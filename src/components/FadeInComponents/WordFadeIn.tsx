import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function WordFadeIn({ paragraph }: { paragraph: string }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.5"],
  });

  const words = paragraph.split(" ");
  return (
    <p
      ref={container}
      className="flex text-xl leading-[1] w-full flex-wrap"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

const Word = ({
  children,
  progress,
  range,
}: {
  children: React.ReactNode;
  progress: MotionValue<number>;
  range: number[];
}) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mr-2 mt-2">
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};
