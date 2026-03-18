import type { NextConfig } from "next";
import os from "os";

function getLocalIP() {
  const interfaces = os.networkInterfaces();

  for (const name of Object.keys(interfaces)) {
    const net = interfaces[name];
    if (!net) continue;

    for (const iface of net) {
      if (iface.family === "IPv4" && !iface.internal) {
        return iface.address;
      }
    }
  }

  return "localhost";
}

const localIP = getLocalIP();

console.log("Local IP:", localIP);

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
    "localhost",
  ],
};

export default nextConfig;