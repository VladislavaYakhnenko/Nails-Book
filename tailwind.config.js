/** @type {DefaultColors} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      indigo: colors.indigo,
      'light-beige': '#F8EDE3',
      'dark-text': '#1E1E1E',
      'light-gray': '#E0E0E0',
      'purple': '#9B8AA3',
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}