import type { NextConfig } from "next";
import ip from "ip";

const localIP = ip.address();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "avatars.mds.yandex.net",
        port: "",
        pathname: "/**",
      },
    ],
  },

  allowedDevOrigins: [
    `http://${localIP}:3000`,
    localIP,
    "localhost"
  ],
};

export default nextConfig;