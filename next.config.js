/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    turbo: {
      loaders: {},
    },
  },
};

module.exports = nextConfig;
