const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1170px',
    },
    colors: {
      ...colors,
      mainBlack: "#141414",
      secondaryBlack: "#0B0B0B",
      gold: "#FFD260",
      pink: "#FF395D",
      turquoise: "#0088B8",
      turquoiseLight: "#33FFDA",
    },
    extend: {
      borderWidth: {
        '1px': '1px'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
