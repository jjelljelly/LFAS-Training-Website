module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007BFF', // Replace with the primary branding color from the London Foot and Ankle Surgery website
        secondary: '#6C757D', // Replace with the secondary branding color
        accent: '#28A745', // Replace with any accent color
      },
    },
  },
  plugins: [],
}