/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html','./dist/js/*.js'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        primary: "#37306B",
        neutral: "#eeee",
        accent: "#2E2760",
        'base-100': '#6D63BC',
        'base-200': '#5846E0'
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('tailwind-scrollbar-hide'),
  ],
}

