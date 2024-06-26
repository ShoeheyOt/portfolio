import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      screens: {
        "2xl": "1440px",
        "3xl": "1560px",
        "4xl": "1668px",
      },
      colors: {
        primary: "#78CBC6",
        secondary: "#873093",
        tertiary: "#4E6564",
        danger: "#FE654F",
        themeWhite: "#C4C4C1",
        dark: "#252325",
        forest2bg: "#273F30",
        forest3bg: "#7DA889",
      },
    },
  },
  plugins: [],
} satisfies Config;
