/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // API_URL: "http://localhost:5000/api",
    API_URL: "https://arrax-backend.mainulhasan05.xyz/api",

    FRONTEND_URL: "https://ar-rax.space",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
