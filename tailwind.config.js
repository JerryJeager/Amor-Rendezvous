// /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wine: "#52041A",
        lightPink: "#FBF8F2"
      },
      backgroundImage: {
        appBg: "url('/images/BG2.png')",
        curve1: "url('/images/curve1.png')",
        curve2: "url('images/curve2.png')",
      },
      fontFamily: {
        comfortaa: "'Comfortaa', sans-serif"
      }
    },
  },
  plugins: [],
}