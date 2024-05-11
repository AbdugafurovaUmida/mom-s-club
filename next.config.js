/** @type {import('next').NextConfig} */
const withVideos = require('next-videos');

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  }
};

module.exports = withVideos(nextConfig);
