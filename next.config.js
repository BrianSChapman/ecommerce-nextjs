/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
   domains: ['placeimg.com', 'pixabay.com', 'unsplash.com']
  },
};

module.exports = nextConfig
