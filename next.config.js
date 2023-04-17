/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["crests.football-data.org"],
  },
};

module.exports = nextConfig;
