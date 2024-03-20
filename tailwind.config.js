/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'roboto': ['roboto', 'sans-serif'],
      },
      colors: {
        'primary': '#11009E',
        'secondary': '#0B60B0',
        'tertiary': '#40A2D8',
        'quaternary': '#6C22A6',
        'quinary': '#9D4EDD',
        'senary': '#161A30',
        'septenary': '#f9fafb',
      },
    },
  },
  plugins: [],
}

