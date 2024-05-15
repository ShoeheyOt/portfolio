import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#DBDBD8",
        secondary: "#0BCA09",
        tertiary: "#0132CE",
        danger: "#C70E1F",
      },
    },
  },
  plugins: [],
} satisfies Config;
