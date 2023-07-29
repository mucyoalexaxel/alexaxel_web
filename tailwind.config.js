/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3BFF18",
        secondary: "#FFE04F",
        "web-black": "#1E1E1E",
        "apple-light": "#DFF8D5",
        "icon-light": "#F1FDEB",
      },
      screens: {
        xsm: "420px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
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
  plugins: [],
};
