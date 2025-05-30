/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
     extend: {
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out',
        'fade-in-delay': 'fade-in 1s ease-out 0.5s',
        'fade-in-delay-2': 'fade-in 1s ease-out 1s'
      }
    }
  },
  plugins: [],
  variants: {
    extend: {
      padding: ['rtl'],
      margin: ['rtl'],
      float: ['rtl'],
      textAlign: ['rtl'],
    },
  },
}

