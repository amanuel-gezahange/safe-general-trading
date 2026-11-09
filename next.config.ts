import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,

  async redirects() {
    return [
      // Old industry pages (pre-redesign) → current Business Fields page
      { source: "/industries", destination: "/business-fields", permanent: true },
      { source: "/industries/:slug*", destination: "/business-fields", permanent: true },
    ];
  },
};

export default nextConfig;
