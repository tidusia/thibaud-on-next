import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  future: {},
  darkMode: false,
  purge: {
    content: [
      "./pages/**/*.{js,jsx,ts,tsx}",
      "./components/**/*.{js,jsx,ts,tsx}",
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    margin: ["responsive", "first"],
  },
  plugins: [require("@tailwindcss/forms")],
};
