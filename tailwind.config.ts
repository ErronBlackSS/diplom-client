/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      }
    }
  },
  variants: {
    extend: {
      animation: ['hover', 'group-hover']
    }
  },
  plugins: ['postcss-nesting', require('@tailwindcss/line-clamp')]
}
