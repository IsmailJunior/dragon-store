/** @type {import('tailwindcss').Config} */
export default {
  content: [
	'./index.html',
	'./src/**/*.{js,ts,jsx,tsx}',
],
  theme: {
    extend: {
      spacing: {
        '82': '26rem',
        '96': '35rem',
        '112': '40rem',
        '120': '50rem',
        '124': '64rem'
      },
      container: {
        padding: '9rem',
        center: true
      }
    },
  },
  plugins: [],
}

