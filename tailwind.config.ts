import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"off-white": "#F5F5F5",
				"primary-grey": "#353535",
				"primary-green": "#016D71",
				"primary-lightgreen": "#CCE6E7",
				success: "#3D7D50",
				error: "#91332D",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			screens: {
				xs: "480px",
			},
		},
	},
	plugins: [
		function ({ matchVariant }: any) {
			matchVariant(
				"has",
				(value: string) => {
					return `&:has(${value})`;
				},
				{
					values: {
						checked: "input:checked",
						focus: "input:focus",
					},
				}
			);
		},
	],
};
export default config;
