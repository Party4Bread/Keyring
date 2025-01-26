import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Lato",
          "Spoqa Han Sans Neo",
          "sans-serif",
        ],

      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".writing-vertical": {
          "writing-mode": "vertical-rl",
          "& sub": {
            bottom: "0",
            right: "0.25em",
          },
        },
      });
    }),],
} satisfies Config;
