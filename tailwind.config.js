/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% center' },
          '50%': { 'background-position': '100% center' },
        },
      },
      animation: {
        'gradient-x': 'gradient-x 8s ease infinite',
      },
      backgroundSize: {
        '200%': '200% auto',
      },
    },
  },
  plugins: [],
}
