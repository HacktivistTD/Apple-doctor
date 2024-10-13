/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Include your app directory
    "./app/routes/**/*.{js,ts,jsx,tsx}", // Include your routes directory if applicable
    "./app/components/**/*.{js,ts,jsx,tsx}", // Include your components directory if applicable
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          '"Courier New"',
          'monospace',
        ],
      },
    },
  },
  plugins: [],
};
