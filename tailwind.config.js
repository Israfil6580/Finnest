/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    fontSize: {
      sm: '18px',
      base: '20px',
      '2xl': '24px',
      '3xl': '30px',
      '5xl': '50px',
      '6xl': '60px'
    },
    colors: {
      'default': '#505050',
      'title': '#040404',
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      title: ['trender', 'serif'],
    },
    extend: {
      borderRadius: {
        'default': '40px',
      }
    }
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

