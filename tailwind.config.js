// const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./server/**/*.html', './client/**/*.jsx'],                                                                                                               
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'puce':'#ce7b9b',
      }
    },
  },  
  variants: {
    extend: {},
  },
  plugins: [],
}

