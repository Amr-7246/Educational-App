/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    // serverComponents: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['cdn-icons-png.flaticon.com'],
  },
  
};
