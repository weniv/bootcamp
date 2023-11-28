/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  assetPrefix: isProd ? 'https://bootcamp.weniv.co.kr' : undefined,
};

module.exports = nextConfig;
