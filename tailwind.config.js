/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-muni' : '#00bc70',
        'blue-muni' : '#1700a5',
        'lime-muni' : '#97d700',
      },
      boxShadow: {
        'all': '0 10px 15px -5px rgb(0 0 0 / 0.1), 0 -10px 15px -5px rgb(0 0 0 / 0.1), 10px 0 15px -5px rgb(0 0 0 / 0.1), -10px 0 15px -5px rgb(0 0 0 / 0.1)',
      },
      screens: {
        'xs': '480px',  // Breakpoint para móviles pequeños
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1600px', // Nuevo breakpoint para pantallas grandes
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

