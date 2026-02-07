/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        arabic: ['"Amiri"', 'serif'],
      },
      colors: {
        blossom: {
          50: '#fdf8f6',
          100: '#f9ebe6',
          200: '#f5dfd6',
          300: '#e8c4b8',
          400: '#d4a090',
          500: '#c17f6a',
          600: '#a86b58',
          700: '#8b5747',
          800: '#72483c',
          900: '#5f3d34',
        },
        cream: '#fefbf7',
        sage: '#9caa88',
        rose: '#c9a9a6',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'fall': 'fall linear forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        fall: {
          '0%': { transform: 'translateY(-10vh) rotate(0deg)', opacity: '0.8' },
          '100%': { transform: 'translateY(100vh) rotate(720deg)', opacity: '0.3' },
        },
      },
    },
  },
  plugins: [],
}
