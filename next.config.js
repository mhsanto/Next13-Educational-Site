/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "www.bgmi.edu.bd",
        port: "",
        pathname: "/public/teacher_image/**",
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
        port: "",
        pathname: "/photo/**",
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
 
        pathname: "/v0/b/**",
      },
      {
        protocol: "http",
        hostname: "http://103.197.207.70:8444",
 
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
