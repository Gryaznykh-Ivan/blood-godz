const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            '2xl': { 'min': '1279px' },
            'xl': { 'min': '1023px' },
            'lg': { 'min': '767px' },
            'md': { 'min': '639px' }
        },
        fontFamily: {
            sans: ['Montserrat']
        },
        colors: {
            ...colors,
            mainBlack: "#141414",
            mainBlue: "#44BCFF",
            secondaryBlack: "#0B0B0B",
            gold: "#FFD260",
            pink: "#FF395D",
            lightBlue: "#A4E7FF",
            common: "#C2C2C2",
            uncommon: "#6596E2",
            rare: "#4C69CD",
            mythical: "#8947FF",
            legendary: "#D42BE6",
            ancient: "#EB4B4B",
            exceedinglyRare: "#CAAB05",
            immortal: "#886A08",
        },
        extend: {
            borderWidth: {
                '1px': '1px'
            },
            height: {
                '1px': '1px'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}