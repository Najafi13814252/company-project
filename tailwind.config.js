/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 2s linear infinite',
        'spin-very-slow': 'spin 4s linear infinite',
      }
    },
  },
  plugins: [],
}

