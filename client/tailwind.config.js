/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        backdrop: {
          primary: {
            500: '#dddedd',
            400: '#c7d6cb',
            300: '#f2f2f2',
            200: '#f7fcf9',
          },
          dark: '#6c8fa6',
        },
        message: {
          self: '#dff2b1',
          other: '#b1ebf2',
        },
        secondary: {
          green: '#5d946c',
          green_100: '#a8bfae',
        },
      },

      width: {
        '9/10': '500px',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
