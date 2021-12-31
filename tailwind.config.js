// https://tailwindcss.com/docs/customizing-colors
const colors = require("tailwindcss/colors");

module.exports = {
  // https://tailwindcss.com/docs/just-in-time-mode
  mode: "jit",

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
  ],
  // https://tailwindcss.com/docs/configuration#theme
  theme: {
    colors: {
      ...colors,
    },
    // https://tailwindcss.com/docs/configuration#variants
    variants: {
      extend: {
        //
      },
    },
  },
  plugins: [],
};
