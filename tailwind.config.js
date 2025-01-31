/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],       // Roboto
        montserrat: ['Montserrat'], // Montserrat
        poppins: ['Poppins']
      },
    },
  },
  plugins: [
    ('@tailwindcss/aspect-ratio'),
  ],
}
