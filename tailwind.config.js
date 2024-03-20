/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#000A1F",
        blue: "#007BFF",
        green: "#44D62C",
        orange: "#FF851B",
        gray: "#4D4D4D",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        madimi: ["Madimi One", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            p: {
              textIndent: "1.5em",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
