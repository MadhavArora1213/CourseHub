/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      zIndex: {
        '10000': '10000',
      },
      backgroundImage: {
        'home-background': "url('/Images/background.avif')",
   
      }
    },
  },
  plugins: [],
}

