/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // API_URL: "http://localhost:5000/api",
    API_URL: "https://arrax-backend.mainulhasan05.xyz/api",

    FRONTEND_URL: "http://localhost:3000",

    NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID: "8f57e9c62e1855a9dd77dbdcab920d82",
    NEXT_PUBLIC_ALCHEMY_ID: "L5nWdDytnj5eg2GtaYX2lV6-eGAJ6nj9",
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
