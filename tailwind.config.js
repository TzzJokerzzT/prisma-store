const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        appear: "appear 2s ease-in-out",
      },
      keyframes: {
        appear: {
          "0%": { opacity: 0 },
          "50%": { opacity: 0.5 },
          "100%": { opacity: 1 },
        },
      },
      transformOrigin: {
        0: "0%",
        50: "50%",
        100: "100%",
      },
      colors: {
        greenPrimary: "#40E0D0",
        greenSecondary: "#00695C",
        bluePrimary: "#004173",
        blueSecondary: "#0979B0",
        white: "#EFEFEF",
      },
      screens: {
        mobile: { max: "540px" },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
