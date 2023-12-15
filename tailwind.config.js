/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './about.html'],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '88rem',
      },
      fontFamily: {
          plus : ['M PLUS 1p'],
          mont : ['Montserrat'],
          hira : ['Hiragino']
      },
      margin: {
        '100' : '99rem'
      }

    },
  },
  plugins: [],
}

