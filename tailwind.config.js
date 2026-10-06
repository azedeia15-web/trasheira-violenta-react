/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        review: '#e50909',
      },
      boxShadow: {
        red: '0 0 30px rgba(229, 9, 9, 0.16)',
      },
    },
  },
  plugins: [],
}
