/** @type {import('next').NextConfig} */
module.exports = {
	experimental: {
		missingSuspenseWithCSRBailout: false,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "icon-library.com",
				port: "",
				pathname: "/images/**",
			},
		],
	},
};
