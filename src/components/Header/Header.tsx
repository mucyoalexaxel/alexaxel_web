import React from "react";

export default function Header() {
  return (
    <div className="sticky left-0 top-[-.5px] z-20 bg-web-dark bg-opacity-10 backdrop-blur-sm p-2 flex w-full border-b-[.5px] border-b-[#151E11]">
      {/* <EncryptButton/> */}
    </div>
  );
}

// export const DrawOutlineButton = ({
//   children,
//   ...rest
// }: {
//   children: React.ReactNode;
// }) => {
//   return (
//     <button
//       {...rest}
//       className="group relative px-4 py-2 font-medium text-slate-100 transition-colors duration-[400ms] hover:text-indigo-300"
//     >
//       <span>{children}</span>

//       {/* TOP */}
//       <span className="absolute left-0 top-0 h-[2px] w-0 bg-indigo-300 transition-all duration-100 group-hover:w-full" />

//       {/* RIGHT */}
//       <span className="absolute right-0 top-0 h-0 w-[2px] bg-indigo-300 transition-all delay-100 duration-100 group-hover:h-full" />

//       {/* BOTTOM */}
//       <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-indigo-300 transition-all delay-200 duration-100 group-hover:w-full" />

//       {/* LEFT */}
//       <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-indigo-300 transition-all delay-300 duration-100 group-hover:h-full" />
//     </button>
//   );
// };

// const DottedButton = () => {
//   return (
//     <button className="rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
//       Hover me
//     </button>
//   );
// };

// import { useRef, useState } from "react";
// import { motion } from "framer-motion";


// const TARGET_TEXT = "Light Mode";
// const CYCLES_PER_LETTER = 2;
// const SHUFFLE_TIME = 50;

// const CHARS = "Dark Mode";

// const EncryptButton = () => {
//   const intervalRef = useRef(null);

//   const [text, setText] = useState(TARGET_TEXT);

//   const scramble = () => {
//     let pos = 0;

//     intervalRef.current = setInterval(() => {
//       const scrambled = TARGET_TEXT.split("")
//         .map((char, index) => {
//           if (pos / CYCLES_PER_LETTER > index) {
//             return char;
//           }

//           const randomCharIndex = Math.floor(Math.random() * CHARS.length);
//           const randomChar = CHARS[randomCharIndex];

//           return randomChar;
//         })
//         .join("");

//       setText(scrambled);
//       pos++;

//       if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
//         stopScramble();
//       }
//     }, SHUFFLE_TIME);
//   };

//   const stopScramble = () => {
//     clearInterval(intervalRef.current || undefined);

//     setText(TARGET_TEXT);
//   };

//   return (
//     <motion.button
//       whileHover={{
//         scale: 1.025,
//       }}
//       whileTap={{
//         scale: 0.975,
//       }}
//       onMouseEnter={scramble}
//       onMouseLeave={stopScramble}
//       className="group relative overflow-hidden rounded-lg border-[1px] border-slate-500 bg-slate-700 px-4 py-2 font-mono font-medium uppercase text-slate-300 transition-colors hover:text-indigo-300"
//     >
//       <div className="relative z-10 flex items-center gap-2">
//         {/* <FiLock /> */}
//         <span>{text}</span>
//       </div>
//       <motion.span
//         initial={{
//           y: "100%",
//         }}
//         animate={{
//           y: "-100%",
//         }}
//         transition={{
//           repeat: Infinity,
//           repeatType: "mirror",
//           duration: 1,
//           ease: "linear",
//         }}
//         className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-indigo-400/0 from-40% via-indigo-400/100 to-indigo-400/0 to-60% opacity-0 transition-opacity group-hover:opacity-100"
//       />
//     </motion.button>
//   );
// };
