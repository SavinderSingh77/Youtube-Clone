/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes : {
        smooth : {
          '0%' : {opacity : '0'},
          '100%' : {opacity : '1'}
        },
      },
      animation : {
        smooth : 'smooth 2s linear'
      }
    },
  },
  plugins: [],
};
