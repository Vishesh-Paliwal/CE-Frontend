/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Include all relevant file types
  ],
  theme: {
    extend: {
      colors: {
        'green-400' : '#3a3f40',
        'black':'#65696a'
      },
    },
  },
  plugins: [],
}
