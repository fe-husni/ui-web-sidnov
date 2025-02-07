const { addDynamicIconSelectors } = require("@iconify/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Pacifico", "serif"],
      }
    },
  },
  plugins: [
    addDynamicIconSelectors(),
  ],
}

