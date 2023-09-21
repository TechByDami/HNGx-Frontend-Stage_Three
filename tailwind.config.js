/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     fontFamily: {
      'playfair': 'Playfair Display, serif',
      'poppins': 'Poppins, sans-serif',
    },
    extend: {
      backgroundImage: {
      "heroBg": "url('/src/assets/heroBg.jpg')"
    },
    },
  },
  plugins: [],
}