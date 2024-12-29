/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  "./app/**/*.{js,ts,jsx,tsx,html,md,mdx}", // Includes JS/TS/JSX/TSX files and optional HTML/MD/MDX
	  "./app/routes/**/*.{js,ts,jsx,tsx,html,md,mdx}", // Includes the routes directory
	  "./app/components/**/*.{js,ts,jsx,tsx,html,md,mdx}", // Includes the components directory
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
	plugins: [
	  // Optionally add Tailwind plugins here
	  // require('@tailwindcss/typography'),
	  // require('@tailwindcss/forms'),
	],
  };
  