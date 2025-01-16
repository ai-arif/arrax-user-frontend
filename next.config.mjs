/** @type {import('next').NextConfig} */
const nextConfig = {
  // compilerOptions: {
  //   jsx: "react-jsx",
  //   moduleResolution: "node",
  //   baseUrl: "./",
  //   paths: {
  //     "@/*": ["src/*"],
  //   },
  //   allowSyntheticDefaultImports: true,
  //   esModuleInterop: true,
  // },
  env: {
    API_URL: "http://localhost:3001/api",
    // API_URL: "https://arrax-backend.mainulhasan05.xyz/api",

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
