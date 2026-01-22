/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/computer-vision-website',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
