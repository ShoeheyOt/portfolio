import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xl": "1440px",
        "3xl": "1560px",
      },
      colors: {
        primary: "#78CBC6",
        secondary: "#873093",
        tertiary: "#4E6564",
        danger: "#FE654F",
        themeWhite: "#C4C4C1",
        dark: "#252325",
      },
    },
  },
  plugins: [],
} satisfies Config;
