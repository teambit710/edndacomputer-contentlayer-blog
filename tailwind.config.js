const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#FF66B3",
          DEFAULT: "#FF007F",
          dark: "#CC0066",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
