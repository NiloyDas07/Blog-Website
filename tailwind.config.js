/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          primary: "#4B6BFB",
          secondary: {
            50: "#F6F6F7",
            100: "#F4F4F5",
            200: "#E8E8EA",
            400: "#A1A1AA",
            500: "#696A75",
            600: "#3B3C4A",
            800: "#181A2A",
            900: "#141624",
          },
        },
      },
      boxShadow: {
        "custom-1": "0 1.5rem 0.75rem -0.375rem hsl(233 27% 13% / 0.12)",
      },
    },
  },
  plugins: [],
};
