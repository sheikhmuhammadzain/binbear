/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "binbearjunk.com",
      },
      {
        protocol: "https",
        hostname: "binbear.njnylimo.us",
      },
    ],
    unoptimized: true,
  },
}

module.exports = nextConfig
