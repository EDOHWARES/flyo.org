/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"


    },
    extend: {
      colors: {
        darkBlue1E: "hsl(217, 28%, 15%)",
        darkBlue2B: "hsl(218, 28%, 13%)",
        darkBlue3F: "hsl(216, 53%, 9%)",
        darkBlue4T: "hsl(219, 30%, 18%)",
        cyanGrad: "hsl(176, 68%, 64%)",
        blueGrad: "hsl(198, 60%, 50%)",
        errorColor: "hsl(0, 100%, 63%)",
        whiteNeutral: "White: hsl(0, 0%, 100%)"
      }
    },
  },
  plugins: [],
}

