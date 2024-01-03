/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                montserrat: ["Montserrat", "sans-serif"],
                pacifico: ["Pacifico", "cursive"],
            },
            backgroundImage: {
                "bg-pattern": "url('/pattern-plaster.png')",
            },
        },
        colors: {
            primary: "#607274",
            secondary: "#B2A59B",
            "font-primary": "#B2A59B",
            "font-secondary": "#DED0B6",
            "font-tertiary": "#B2A59B",
        },
    },
    plugins: [],
};
