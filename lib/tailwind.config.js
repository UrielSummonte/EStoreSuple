/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "../public/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js",
    "../public/index.html"
  ],
  theme: {
    extend: {
      backgroundImage:{
        "open-menu": "url(../../public/assets/icons/menu-open.svg)",
        "close-menu": "url(../../public/assets/icons/menu-close.svg)",
      },
      backgroundSize:{
        "80%": "80%",
      }
    },

    colors: {
      'nav-color': '#b91c1c',
      'footer-color': '#b91c1c',
      'promo-color' : '#fef08a',
      'primario' : '#991b1b',
      'secundario' : '#d97706',
      'prod-desc' : '#374151',
      'fondo' : '#a8a29e',
    },
  },
  plugins: [
    require("@tailwindcss/forms"), 
    require("flowbite/plugin"),
  ],
}

