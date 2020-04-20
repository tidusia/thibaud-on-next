const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
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
  plugins: [require("@tailwindcss/ui")],
};
