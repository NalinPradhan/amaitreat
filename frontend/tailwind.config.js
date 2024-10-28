/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Work Sans"', "sans-serif"],
        hanken:["'Hanken Grotesk'", "sans-serif"],
        danfo:["'Danfo'", "sans-serif"],
        // "playwright-england": ['"Playwright England SemiJoined"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
