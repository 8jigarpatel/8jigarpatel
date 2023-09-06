/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        tahoma: ['Tahoma'],
        trebuchet: ["'Trebuchet MS'"],
        nunito: ['rajdhani', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
