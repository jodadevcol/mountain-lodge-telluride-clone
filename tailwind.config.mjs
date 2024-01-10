/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			maxWidth: {
				"8xl": "90rem"
			},
			fontFamily: {
				"raleway": "'Raleway Variable', system-ui, sans-serif",
				"playfair": "'Playfair Display Variable', system-ui, sans-serif"
			},
			colors: {
				"primary": "#2172a3",
				"secondary": "#105e8f",
				"third": "#263846",
				"fourth": "#1b4157",
			}
		},
	},
	plugins: [],
}
