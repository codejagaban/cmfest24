/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		colors: {
		  'bg-primary': '#121121',
		  'bg-light': '#CCCCCC',
		  'bg-secondary': '#F8F8FF',
		  'bg-azure': '#018FFB',
		  'bg-bittersweet': '#FD6A63',
		  'goldenrod': '#FDBF3D',
		  'bg-turquoise-light': '#02D6C8', // Corrected from #FD6A63 to #02D6C8
		  'text-turquoise': '#04D5C9',
		  'text-goldenrod': '#FDBF3D',
		  'text-primary': '#F8F8FF',
		  'text-secondary': '#121121',
		},
	  },
	},
	plugins: [],
  }
  