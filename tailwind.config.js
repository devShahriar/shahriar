const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{jsx}', './components/**/*.{jsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: colors.green,
      secondary: colors.gray
    },
    fontFamily: {
      'mono': ['Inconsolata','monospace', 'Menlo', 'Consolas', 'Monaco'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}