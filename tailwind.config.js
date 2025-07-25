module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#f0f5ff',
          100: '#e6f0ff',
          200: '#d0e0ff',
          300: '#a0c0ff',
          400: '#6ea0ff',
          500: '#4a7de8',
          600: '#2a5fcc',
          700: '#1a4fbc',
          800: '#1a3c8f',
        },
      },
    },
  },
  plugins: [],
}