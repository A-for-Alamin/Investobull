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
      fontFamily: {
        Montserrat: ['"Montserrat"', "serif"],
        Poppins: ['"Poppins"', "serif"],
        DMSans: ['"DM Sans"', "serif"],
        Roboto: ['"Roboto"', "serif"],
        Rubik: ['"Rubik"', "serif"],
      },
    },
  },
  plugins: [],
};

export default keepTheme(config);
