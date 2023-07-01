/** @type {import('tailwindcss').Config} */
module.exports = {
  content:["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary:"#C3272B",
        yellow:"#FFFF00",
        blue:"#BBB4FF",
        whitetext:"#FCFCFC",
        blacktext:"#0A0A0A"
      }
    },
    fontFamily:{
      inter:["Public sans, sans-serif"]
     },
  },
  plugins: [],
}

