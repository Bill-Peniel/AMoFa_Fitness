/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      important: true,
      fontFamily:{
        poppins: ["Poppins", "sans-serif"],
      },
      colors:{
        primary: "#6153CD",
      },
      container:{
        center:true,
        padding:{
          DEFAULT: '1rem',
          sm: '3rem',
        }
      },
      fontSize:{
        base: '15px',
        lg: '17px',
        xl: '18px'
      }
    },
  },
  plugins: [],
}