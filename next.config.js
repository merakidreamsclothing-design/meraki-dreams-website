/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.shopify.com', 'images.unsplash.com'],
    unoptimized: false,
  },
  env: {
    NEXT_PUBLIC_SHOPIFY_STORE_NAME: process.env.NEXT_PUBLIC_SHOPIFY_STORE_NAME,
    NEXT_PUBLIC_SHOPIFY_ACCESS_TOKEN: process.env.NEXT_PUBLIC_SHOPIFY_ACCESS_TOKEN,
  },
}

module.exports = nextConfig