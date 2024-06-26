import { motion } from "framer-motion";
import { SVGProps } from "react";

const svgVariants = {
  hidden: {
    opacity: 0.8,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: -10,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      type: "keyframes",
    },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      type: "keyframes",
      ease: "easeInOut",
    },
  },
};

const ArrowSVG = (props: SVGProps<SVGSVGElement>) => (
  <motion.svg
    // width={30}
    // height={43}
    viewBox="0 0 30 43"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    variants={svgVariants}
    initial="hidden"
    animate="visible"
    // {...props}
  >
      <motion.path
        id="Vector"
        d="M13.255 1.21398C12.6912 4.52495 12.7819 7.99984 12.9486 11.3414C13.1191 14.7173 13.4762 18.0787 14.011 21.4166C15.0933 28.1557 16.8844 34.783 19.3282 41.1618C19.8395 42.4948 21.4312 42.6966 22.2669 41.5437C24.3935 38.6092 26.0758 35.4351 27.3974 32.0683C28.0283 30.4614 28.5613 28.8168 28.9928 27.1469C29.4569 25.3545 30.0824 23.3297 29.7578 21.4905C29.5258 20.1773 27.412 19.9179 26.8373 21.1122C26.1085 22.6272 26.0323 24.4322 25.6353 26.0661C25.2274 27.7414 24.718 29.3932 24.1125 31.0072C22.9359 34.1435 21.3387 37.1374 19.4914 39.9314C20.4178 39.9314 21.3424 39.9314 22.2687 39.9314C19.6817 33.8751 17.7601 27.5396 16.4928 21.0834C15.8601 17.8625 15.3761 14.6092 15.0588 11.345C14.7361 8.02687 14.709 4.67263 14.3409 1.36347C14.2793 0.80323 13.3692 0.547462 13.255 1.21398Z"
        fill="#C3F00D"
        variants={pathVariants}
        initial="hidden"
        animate="visible"
      />
      <motion.path
        id="Vector_2"
        d="M21.2753 41.0681C21.0106 40.3277 20.1695 40.1349 19.4932 39.8935C18.5397 39.5549 17.5788 39.2234 16.647 38.8307C14.7743 38.0399 12.9686 37.1158 11.2029 36.1124C9.48604 35.1379 7.70214 34.1867 6.11948 33.0032C4.5767 31.8485 3.56691 30.3714 2.62058 28.7267C2.10752 27.8332 0.909205 28.3177 0.814934 29.213C0.582883 31.4288 2.12566 33.3671 3.76453 34.6894C5.61006 36.1791 7.7946 37.2491 9.88488 38.3551C11.9552 39.4504 14.0835 40.5132 16.3279 41.2068C17.3776 41.531 18.4436 41.7814 19.5422 41.8553C19.883 41.8769 21.5491 41.8318 21.2753 41.0681Z"
        fill="#C3F00D"
        variants={pathVariants}
        initial="hidden"
        animate="visible"
      />
  </motion.svg>
);
export default ArrowSVG;
