/** @type {import('tailwindcss').Config} */
export default {
  content: [
	'./index.html',
	'./src/**/*.{js,ts,jsx,tsx}',
],
  theme: {
    extend: {
      spacing: {
        '96': '38rem'
      },
      container: {
        padding: '9rem',
        center: true
      }
    },
  },
  plugins: [],
}

