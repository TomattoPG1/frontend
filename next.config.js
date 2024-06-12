/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: 'https',
        hostname: 'tequierofashion.com',
        pathname: '/cdn/**',  // Asegúrate de incluir el pathname si es necesario
      },
    ],
  },
};

module.exports = nextConfig;
