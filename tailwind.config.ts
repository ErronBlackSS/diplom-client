/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

module.exports = {
  content: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      black: '#222',
      primary: colors.red
    },
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      }
    }
  },
  plugins: []
}
