/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cta4ql5vqsv6edko.public.blob.vercel-storage.com"
      }
    ]
  }
};

export default nextConfig;
