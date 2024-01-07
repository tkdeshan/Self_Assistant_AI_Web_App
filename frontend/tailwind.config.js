/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        zenkaku: ["'Zen Kaku Gothic New'", "sans-serif"],
      },
      screens: {},
    },
  },
  plugins: [],
};
