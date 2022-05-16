/* eslint-disable global-require */
module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            screens: {},

            colors: {
                black: '#000000',
                purple: '#4200FF',
                offReddish: '#ce3528',
                reddishWhite: '#2e2336',
                darkishBlack: '#0f0c16',
                orange: '#ff6500',
                reddishDark: '#0d0914',
                DEFAULT: '#FFFFFF',
            },

            fontFamily: {
                body: ['Poppins', 'sans-serif'],
                montserrat: ['Montserrat', 'sans-serif'],
            },
        },
    },
};
