/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "../public/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js",
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
  },
  plugins: [
    require("@tailwindcss/forms"), 
    require("flowbite/plugin"),
  ],
}

