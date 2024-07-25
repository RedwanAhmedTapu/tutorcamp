/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#14007a",
        blue: "#1a009c",
        "light-blue": "rgb(74, 225, 255)",
        pink: "rgb(255, 40, 113)",
      },
      spacing: {
        "90vh": "90vh",
        "90vw": "90vw",
      },
      borderRadius: {
        lg: "1rem",
      },
      borderWidth: {
        thin: "0.4rem",
      },
    },
    screens: {
      // 'max-999': { 'max': '999px' },

      xs: "400px",
      // => @media (min-width: 400px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }
      mdUp: "1000px",

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [
    // require('tailwind-scrollbar')({ nocompatible: true }),
  ],
  darkMode: ["class"],
};
