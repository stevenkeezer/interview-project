/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
    ignoreDuringBuilds: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['patinayard.com', 'tsmdesigncatalog.com'],
  },
};

module.exports = nextConfig;
