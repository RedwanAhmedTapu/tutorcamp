/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundSize: {
        '50%': '100%',
       
      },
    },
  },
  darkMode: ['class'],
  plugins: [],
};
