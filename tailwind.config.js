/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        primary:['primary','sans-serif']
      },
      colors:{
        dark:{
          100:"#1B1B1B",
          200:"#101010",
          300:"#101828"
        },
        light:{
          50:"#F9FAFB",
          100:"#D0D5DD",
          200:"#667085",
          300:"#F3F3F5",
          400:"#FFFEFD"
        }
      }
    },
  },
  plugins: [],
}