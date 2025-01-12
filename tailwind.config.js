/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx,vue}",
    "./public/**/*.html",
    "./node_modules/flowbite/**/*.js",
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          primary: {
            DEFAULT: "#57538A", // Muted Purple
            50: "#F6F5FA",
            100: "#E3E2F0",
            200: "#C3C1E1",
            300: "#A2A0D3",
            400: "#827FC4",
            500: "#57538A", // Main
            600: "#464370",
            700: "#353355",
            800: "#232239",
            900: "#12121E",
          },
          secondary: {
            DEFAULT: "#848652", // Earthy Greenish Gray
            50: "#F7F7ED",
            100: "#E9E9D1",
            200: "#D3D3A5",
            300: "#BEBE79",
            400: "#A8A84C",
            500: "#848652", // Main
            600: "#6B6D43",
            700: "#525533",
            800: "#393C22",
            900: "#212312",
          },
          accent: {
            DEFAULT: "#FFFF00", // Bright Yellow
            50: "#FFFFF5",
            100: "#FFFFE5",
            200: "#FFFFB8",
            300: "#FFFF8A",
            400: "#FFFF5C",
            500: "#FFFF00", // Main
            600: "#D1D100",
            700: "#A2A200",
            800: "#747400",
            900: "#454500",
          },
          background: {
            DEFAULT: "#FFFFFF", // Light theme background
          },
        },
        dark: {
          primary: {
            DEFAULT: "#0C0A2B", // Deep Blue
            50: "#E4E4F1",
            100: "#CAC9E3",
            200: "#9A98C5",
            300: "#6A67A7",
            400: "#3A3690",
            500: "#0C0A2B", // Main
            600: "#090823",
            700: "#06061B",
            800: "#030312",
            900: "#010109",
          },
          secondary: {
            DEFAULT: "#3E3C7C", // Rich Purple
            50: "#E6E5F2",
            100: "#CDCBE5",
            200: "#A3A1D2",
            300: "#7A78BF",
            400: "#504FAC",
            500: "#3E3C7C", // Main
            600: "#2E2C5A",
            700: "#1F1D3B",
            800: "#0F0D1B",
            900: "#050509",
          },
          accent: {
            DEFAULT: "#FFFF00", // Bright Yellow
            50: "#FFFFF5",
            100: "#FFFFE5",
            200: "#FFFFB8",
            300: "#FFFF8A",
            400: "#FFFF5C",
            500: "#FFFF00", // Main
            600: "#D1D100",
            700: "#A2A200",
            800: "#747400",
            900: "#454500",
          },
          background: {
            DEFAULT: "#0C0A2B", // Dark theme background
          },
        },
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};

