/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    APP_BACKEND_URL: 'https://calm-gold-hermit-crab-hose.cyclic.app',
  },
  images: {
    domains: ["res.cloudinary.com"],
  }
}

module.exports = nextConfig
