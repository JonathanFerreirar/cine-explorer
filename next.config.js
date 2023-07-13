/** @type {import('next').NextConfig} */

const nextConfig = {
  nextConfig: {
    reactStrictMode: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
        pathname: "/t/p/**/**",
      },
    ],
  },
};

module.exports = nextConfig;

//pathname: "/t/p/w1280/**",
