/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'phone': '420px',
      'mid': '450px',
      'tablet': '640px',
      'laptop': '1024px',
    },
  },
  plugins: [],
}

