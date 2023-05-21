module.exports = {
  plugins: {
    tailwindcss: {
      content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
      theme: {
        extend: {
          colors: {
            'main-blue': '#1D2F5D',
            'main-grey': '#F5F5F5',
            'main-red': '#E53E3E'
          }
        }
      }
    },
    autoprefixer: {}
  }
}
