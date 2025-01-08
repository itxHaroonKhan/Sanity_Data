/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'], // Sanity CDN کے لیے اجازت
  },
};

module.exports = nextConfig;
