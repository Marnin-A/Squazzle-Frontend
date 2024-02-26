/** @type {import('next').NextConfig} */
module.exports = {
	experimental: {
		missingSuspenseWithCSRBailout: false,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "res.cloudinary.com",
				port: "",
				pathname: "/salimkarbm/image/upload/**",
			},
			{
				protocol: "https",
				hostname: "icon-library.com",
				port: "",
				pathname: "/images/**",
			},
		],
	},
};
