import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    // colors: {
    //   walnut_brown: '#736759',
    //   buff: '#D4A281',
    //   hookers_green: '#61837C',
    //   hookers_green_2: '#61857B',
    //   night: '#121212',
    //   cyan_king: '#736759',
    //   almost_white: '#D4A281',
    //   chic_gray: '#61837C',
    //   cyan_green: '#61857B',
    //   sky: '#121212',
    // },
    extend: {
      fontFamily: {
        amaranth: ["Amaranth", "sans-serif"],
        open_sans: ["Open Sans", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};
export default config;
