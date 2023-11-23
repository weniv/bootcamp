/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'imgix',
    path: 'https://weniv.github.com/bootcamp/',
  },
};

module.exports = nextConfig;
