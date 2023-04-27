/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        fuchsia: "#da22dd",
        "aside-clr": "#30103f",
        black: "#000",
        "text-clr": "#fff",
        bg: "#ecf1fe",
      },
      fontFamily: { inter: "Inter" },
    },
    fontSize: { "21xl": "40px", "29xl": "48px", "13xl": "32px" },
  },
  corePlugins: { preflight: false },
};
