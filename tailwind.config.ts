import { colors } from "@mui/material";

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: { main_black: "rgb(24, 26, 42)", logo_gray: "rgb(220,221,223)" },
      fontFamily: {
        font_plus_jakarta_sans: ["Plus Jakarta Sans", "sans-serif"],
        font_work_sans: ['"Work Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
