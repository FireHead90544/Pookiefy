/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "i2o.scdn.co",
				port: "",
				pathname: "/image/**",
			},
		],
	},
};

export default nextConfig;
