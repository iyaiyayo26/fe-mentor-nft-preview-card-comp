/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx, ts, tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        "very-dark-blue": "#14253d",
        "soft-blue": "#8bacda",
        cyan: "	#00fff7",
      },
    },
  },
  plugins: [],
};
