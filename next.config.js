/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // This is required for static export
  },
};

module.exports = nextConfig;
