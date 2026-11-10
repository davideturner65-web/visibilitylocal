/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
  },
  async redirects() {
    return [
      // The paid Visibility Report was replaced by the free market check.
      { source: "/visibility-report", destination: "/market-check", permanent: true },
    ];
  },
};

export default nextConfig;
