/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx,vue}",
    "./public/**/*.html",
    "./node_modules/flowbite/**/*.js",
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1A3246", // Main primary color
          50: "#f2f4f7",
          100: "#d9dde2",
          200: "#b0b8c3",
          300: "#8893a3",
          400: "#617085",
          500: "#3E5064",
          600: "#2C3D4D",
          700: "#1A3246", // Main
          800: "#122436",
          900: "#0B1624",
        },
        secondary: {
          DEFAULT: "#6B7A8F", // Main secondary color
          50: "#f5f6f8",
          100: "#e1e4e8",
          200: "#c4c9d1",
          300: "#a7adb9",
          400: "#8a92a1",
          500: "#6B7A8F", // Main
          600: "#565f71",
          700: "#424653",
          800: "#2e2e35",
          900: "#1b1b1d",
        },
        accent: {
          DEFAULT: "#F39C12", // Main accent color
          50: "#fef8e9",
          100: "#fdefd0",
          200: "#fad8a1",
          300: "#f7c271",
          400: "#f4ab42",
          500: "#F39C12", // Main
          600: "#d1840e",
          700: "#9f630b",
          800: "#6d4207",
          900: "#3c2104",
        },
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};

