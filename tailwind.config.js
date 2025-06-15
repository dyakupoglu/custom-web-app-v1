/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        merriweather: ["var(--font-merriweather)", "serif"],
      },
      colors: {
        "restaurant-red": "rgb(var(--color-restaurant-red))",
        "restaurant-orange": "rgb(var(--color-restaurant-orange))",
        "restaurant-dark": "rgb(var(--color-restaurant-dark))",
      },
    },
  },
  plugins: [],
};
