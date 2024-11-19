import flowbite from 'flowbite-react/tailwind';

export const content = [
  './index.html',
  './src/**/*.{js,jsx,ts,tsx}',
  flowbite.content(),
];
export const theme = {
  extend: {},
};
export const plugins = [flowbite.content()];
