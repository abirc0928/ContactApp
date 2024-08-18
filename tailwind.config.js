/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        gray: "#5A5959",
        yellow: "#9a8787",
        orange: "#ba3c3c",
      }
    },
  },
  plugins: [],
}