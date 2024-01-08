import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#3BFF18",
        "primary-goldish": "#C3F00D",
        secondary: "#0076FF",
        white: "#fdfdfd",
        "navbar-black": "#080808",
        "web-dark": "#111",
        "web-black": "#2A272A",
        "apple-light": "#DFF8D5",
        "icon-light": "#F1FDEB",
      },
      screens: {
        xsm: "370px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      gridColumn: {
        "span-13": "span 13 / span 13",
        "span-14": "span 14 / span 14",
      },
      gridTemplateColumns: {
        12: "repeat(12, minmax(0, 80px))",
        14: "repeat(14, minmax(0, 80px))",
        branchSelector: "repeat(12, 16px)",
        svgBlog: "repeat(16, 30px)",
      },
      gridTemplateRows: {
        sectionRow: "repeat(4, 100vh)",
        svgBlog: "repeat(12, 30px)",
        svgBlogMobile: "repeat(6, 30px)",
      },
      fontFamily: {
        Inter: ['"Inter"', '"system-ui"', '"sans-serif"'],
      },
      fontWeight: {
        normal: 100,
        regular: 200,
        semibold: 300,
        bold: 600,
      },
      fontSize: {
        xsm: "0.7rem",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
