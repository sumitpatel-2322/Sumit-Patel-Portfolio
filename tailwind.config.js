// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FEFFFE",
        mint: "#E5FCF5",
        celadon: "#B3DEC1",
        purple: "#210124",
        orange: "#FFA400",
      },
    },
  },
  plugins: [],
};
