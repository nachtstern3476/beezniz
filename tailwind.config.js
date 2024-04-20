/** @type {import('tailwindcss').Config} */
export default {
	content: ['./*.html'],
	theme: {
		extend: {
			backgroundImage: {
				'running-text-gradient': "linear-gradient(90deg, #C5FBFF 0%, #FF8B8B 34%, #FFE092 72.39%, #FFDBDB 100%)",
				main: "url('./img/main-bg.png')",
				additional: "url('./img/additional-bg.png')",
			},
			colors: {
				navy: '#00142d',
				pink: '#ff8b8b',
				'light-pink': '#ffdbdb',
				'light-blue': '#477dfd',
				'white': '#fffcf7'
			},
			fontFamily: {
				"mona-sans": "Mona Sans",
			},
		},
	},
	plugins: [],
};
