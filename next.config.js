/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['stefanwalters.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'stefanwalters.com',
      },
    ],
  },
}

module.exports = nextConfig
