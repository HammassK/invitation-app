import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/invitation-app",
  assetPrefix: "/invitation-app/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
