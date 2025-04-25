/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['binbear.njnylimo.us'],
    unoptimized: process.env.NODE_ENV === 'development',
  },
}

module.exports = nextConfig
