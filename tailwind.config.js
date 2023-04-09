/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html','./dist/js/*.js'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        'base-400': '#3953DF',
        'base-450': '#2F47C7',
        'success-card': '#358D6D',
        'danger-card': '#A54141',
        'info-card': '#258C86',
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('tailwind-scrollbar-hide'),
  ],
  daisyui: {
    themes: [
      {
        adindasUI: {
          primary: "#37306B",
          neutral: "#eeee",
          accent: "#2E2760",
          'base-100': '#6D63BC',
          'base-200': '#5846E0',
          'base-300': '#534999',
        },
      },
      "dark",
      "cupcake",
    ],
  },
}

