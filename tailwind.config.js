import flowbite from 'flowbite-react/tailwind';

export const content = [
  './index.html',
  './src/**/*.{js,jsx,ts,tsx}',
  flowbite.content(),
];
export const theme = {
  extend: {
    colors: {
      primary: '#17A9E2',
    },
  },
};
export const plugins = [flowbite.content()];
