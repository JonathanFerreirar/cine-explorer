/** @type {import('next').NextConfig} */

module.exports = {
  nextConfig: {
    reactStrictMode: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
        pathname: "/t/p/w500/**",
      },
    ],
  },
};
