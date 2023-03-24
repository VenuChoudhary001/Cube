/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: "Primary",
        primary100: "TemposLight",
        primary200: "Primary",
        primary300: "TemposMedium",
        primary400: "TemposSemibold",
        primary500: "TemposBold",
      },
      colors: {
        dark: {
          100: "#1B1B1B",
          200: "#101010",
          300: "#101828",
          400: "#1F2F49",
          500: "#181513",
          600: "rgb(17,16,17)",
          700: "#1A1A1A",
        },
        light: {
          50: "#F9FAFB",
          100: "#D0D5DD",
          200: "#667085",
          300: "#F3F3F5",
          400: "#FFFEFD",
        },
      },
      screens: {
        sm: "428px",
        "2xl": "1440px",
        "3xl": "1540px",
        "4xl": "1720px",
        "5xl": "1920px",
      },
    },
  },
  plugins: [],
};
