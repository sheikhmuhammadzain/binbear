/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // This is the key line you're missing!
  reactStrictMode: true,
  trailingSlash: true,  // Helps with hosting compatibility
  images: {
    domains: ['binbearjunk.com', 'binbear.njnylimo.us'],
    // unoptimized: process.env.NODE_ENV === 'development',
    unoptimized: true,  // Required for static export
  },
}

module.exports = nextConfig