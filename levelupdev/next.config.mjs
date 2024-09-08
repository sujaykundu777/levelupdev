// @ts-check

/** @type {import('next').NextConfig} */
import { withContentlayer } from "next-contentlayer2";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
  redirects: async () => {
    return [
      {
        source: "/guides",
        destination: "https://guides.levelupdev.in",
        permanent: true,
      },
    ];
  },
  env: {
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
    NEXT_AUTH_SECRET: process.env.NEXT_AUTH_SECRET,
  },
};

// @ts-ignore
export default withContentlayer(nextConfig);
