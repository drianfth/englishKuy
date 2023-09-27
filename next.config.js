/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["@prisma/client", "bcrypt"],
  },
  images: {
    remotePatterns: [
      // {
      //   protocol: "https",
      //   hostname: "res.cloudinary.com",
      //   port: "",
      //   pathname: "/**",
      // },
      {
        protocol: "https",
        hostname: "www.essentialenglish.review",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
