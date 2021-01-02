module.exports = {
  purge: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
};
