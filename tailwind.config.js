module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        './node_modules/flowbite/**/*.js', // Add this line for Flowbite
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('flowbite/plugin') // Add Flowbite as a plugin
    ],
};