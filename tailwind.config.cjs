const flowbite = require('flowbite-react/tailwind');

module.exports = {
  content: [
    './index.html', // File HTML utama
    './src/**/*.{js,jsx,ts,tsx}', // Semua file React
    flowbite.content(), // Komponen Flowbite
  ],
  theme: {
    extend: {
      colors: {
        primary: '#17A9E2', // Warna kustom
        secondary: '#000000',
        sidebar: '#f9fafb',
      },
    },
  },
  plugins: [flowbite.plugin()], // Gunakan plugin Flowbite
};
