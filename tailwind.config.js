/** @type {import('tailwindcss').Config} */

import { keepTheme } from "keep-react/keepTheme";

const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        primary: "#2FB574",
        Background: "#0D1F11",
      },
    },
  },
  plugins: [],
};

export default keepTheme(config);
