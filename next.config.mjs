/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: [
      "@radix-ui/react-dialog",
      "@radix-ui/react-dropdown-menu",
      "@radix-ui/react-slot",
      "@radix-ui/react-tabs",
    ],
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
  // Next.js 14 호환성을 위한 설정
  trailingSlash: false,
  skipTrailingSlashRedirect: true,
  // 이미지 최적화 비활성화
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
