/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        '3.5xl': '3.5rem', // Adding custom size
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              fontSize: theme('fontSize.3.5xl'),
            },
          },
        },
      }),
      colors: {
        white: '#fff',
        outline: '#00a656'
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'header': 'linear-gradient(90deg, rgba(43, 93, 97, 1) 0%, rgba(23, 73, 77, 1) 50%, rgba(3, 53, 57, 1) 100%)',
      },
    },
  },
  plugins: [],
}

