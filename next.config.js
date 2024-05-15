/** @type {import('next').NextConfig} */
const rewrites = () => {
  return [
    {
      source: "/api/v1/:path*",
      destination: `${process.env.API_URL}/api/v1/:path*/`, // 开发环境
    },
  ];
};


const nextConfig = {
  reactStrictMode: true,
  rewrites
};

module.exports = nextConfig;
