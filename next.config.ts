import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        port: "", // optional; leave as "" unless needed
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "", // optional; leave as "" unless needed
      },
      {
        protocol: "https",
        hostname: "www.whaleyhousesandiego.com",
        port: "", // optional; leave as "" unless needed
      },
      {
        protocol: "https",
        hostname: "1.bp.blogspot.com",
        port: "", // optional; leave as "" unless needed
      },
    ]
  }
};

export default nextConfig;
