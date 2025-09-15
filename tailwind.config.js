// @type {import('tailwindcss').Config}
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: "#f0fdfd",
                    100: "#e0fafa",
                    200: "#b8f0f1",
                    300: "#80e0e2",
                    400: "#4dd0d2",
                    500: "#33b8b9",
                    600: "#2a9a9b",
                    700: "#237b7c",
                    800: "#1e6263",
                    900: "#195051",
                    950: "#0f3334",
                },
            },
        },
    },

    plugins: [],
};
