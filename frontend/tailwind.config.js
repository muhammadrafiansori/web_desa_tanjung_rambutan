/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'village': {
          'primary': '#2c5530',
          'secondary': '#1a3a1f',
        },
        'desa-green': {
          50: '#f0f9f0',
          100: '#e8f5e8',
          200: '#d1e7dd',
          300: '#a3d4b7',
          400: '#75c091',
          500: '#2c5530',
          600: '#1a3a1f',
          700: '#0f2614',
          800: '#0a1b0f',
          900: '#051008',
        },
      },
    },
  },
  plugins: [],
}

