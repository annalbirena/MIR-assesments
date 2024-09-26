/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      "pale-blue": "hsl(225, 100%, 94%)",
      "very-pale-blue": "hsl(225, 100%, 98%)",
      "desaturated-blue": "hsl(224, 23%, 55%)",
      "bright-blue": "hsl(245, 75%, 52%)",
      "dark-blue": "hsl(223, 47%, 23%)",
      purple: "#766cf1",
    },
    extend: {
      boxShadow: {
        "2xl": "0 10px 40px -15px hsl(245, 75%, 52%)",
      },
    },
  },
  plugins: [],
};
