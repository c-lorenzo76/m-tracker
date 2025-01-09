/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        bluegray: {
          900: '#1e293b',
          700: '#334155',
        },
      },
    },
  },
  plugins: [],
}

