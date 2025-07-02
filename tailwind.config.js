/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        normal: '500',
        bold: '700',
      },
      fontSize: {
        fontSize: '1.125rem',
      },
      colors: {
        primary: {
          cyan: 'hsl(180, 66%, 49%)',
          darkVoilet: 'hsl(257, 27%, 26%)',
        },
        secondary: {
          red: 'hsl(0, 87%, 67%)',
        },
        neutral: {
          gray: 'hsl(0, 0%, 75%)',
          grayBgColor: 'hsl(230, 25, 95)',
          grayishViolet: 'hsl(257, 7%, 63%)',
          veryDarkBlue: 'hsl(255, 11%, 22%)',
          veryDarkVioled: 'hsl(260, 8%, 14%)',
        },
      }
    },
  },
  plugins: [],
}