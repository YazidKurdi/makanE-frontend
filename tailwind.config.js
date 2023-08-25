/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily: {
      sans: ['Alef', 'sans-serif']
    },
    extend: {
      colors: {
        blackGrey: { "50": "#25262B", "100": "#1B1C21" },
        lightRed: "#F13D5D",
        lightWhite: { "50": "#90A0A0", "100":"#E2E8F0"},
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}