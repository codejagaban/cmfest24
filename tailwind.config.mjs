/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		colors: {
		  'bg-primary': '#121121',
		  'bg-light': '#CCCCCC',
		  'bg-secondary': '#F8F8FF',
		  'azure': '#018FFB',
		  'bittersweet': '#FD6A63',
		  'goldenrod': '#FDBF3D',
		  'turquoiseLight': '#02D6C8',
		  'text-turquoise': '#04D5C9',
		  'text-goldenrod': '#FDBF3D',
		  'text-primary': '#F8F8FF',
		  'text-secondary': '#121121',
		},
		backgroundImage: {
		  'this-year': "url('./src/images/thisyear.png')",
		},
	  },
	},
	plugins: [],
  }
  