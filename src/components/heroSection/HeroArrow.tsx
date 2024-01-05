import { ArrowSVG } from "@components/svgs";
import { motion } from "framer-motion";

const HeroArrow = () => {
  return (
    <motion.div className="flex items-center justify-between gap-2 heroScrollBar h-10 w-10">
      <ArrowSVG />
    </motion.div>
  );
};

export default HeroArrow;
