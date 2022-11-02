/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 50px 50px rgba(0, 0, 0, 0.15)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }
    },
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
  plugins: [require("daisyui")],
  daisyui: {
    themes:["cupcake"]
     
  },
}