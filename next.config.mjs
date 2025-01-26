/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.pexels.com", // Existing hostname
            },
            {
                protocol: "https",
                hostname: "res.cloudinary.com", // Add Cloudinary hostname
            },
        ],
    },
};

export default nextConfig;
