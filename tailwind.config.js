/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '1375px',
      // => @media (min-width: 768px) { ... }

      'lg': '1600px',
      // => @media (min-width: 1024px) { ... }

      'xl': '2400px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '3400px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}