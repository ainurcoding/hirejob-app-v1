/** @type {import('next').NextConfig} */
const nextConfig = {
  // rewrites: {
  //   source: '/calm-gold-hermit-crab-hose.cyclic.app/:path*',
  //   destination: 'https://calm-gold-hermit-crab-hose.cyclic.app/:path*'
  // },
  reactStrictMode: true,
  swcMinify: true,
  env: {
    APP_BACKEND_URL: 'http://localhost:5000',
  },
  images: {
    domains: ["res.cloudinary.com"],
    formats: ['image/webp'],
    unoptimized: true,
  }
}

module.exports = nextConfig
