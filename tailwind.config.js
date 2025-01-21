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
                primary: {
                    DEFAULT: "#005792",
                    50: "#f2f7fa",
                    100: "#e4eef5",
                    200: "#bdd4e7",
                    300: "#97bad8",
                    400: "#4d86bb", // Light blue for accents
                    500: "#005792", // Rich dark blue for headings
                    600: "#004e83",
                    700: "#003559", // Deep contrast for major elements
                    800: "#002845", // Background contrast for content
                    900: "#001b30", // Very dark blue
                },
                secondary: {
                    DEFAULT: "#dcdcdc",
                    50: "#f9f9f9",
                    100: "#f3f3f3",
                    200: "#dcdcdc",
                    300: "#c6c6c6", // Light gray for muted text
                    400: "#9a9a9a",
                    500: "#7d7d7d", // Neutral tones for minor details
                    600: "#616161",
                    700: "#474747",
                    800: "#303030", // Dark gray for subtle contrast
                    900: "#1a1a1a", // Almost black
                },
                accent: {
                    DEFAULT: "#ffd675",
                    50: "#fff8e7",
                    100: "#fff1d0",
                    200: "#ffe3a3",
                    300: "#ffd675", // Glowing warm accents for buttons or highlights
                    400: "#ffc54d",
                    500: "#ffb300",
                    600: "#e69e00",
                    700: "#b37c00",
                    800: "#805900",
                    900: "#664600",
                },
            },

        },
    },

    plugins: [require('flowbite/plugin')],
};

