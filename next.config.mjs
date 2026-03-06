/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  // Disable problematic experimental features
  experimental: {
    // Keep only essential optimizations
    optimizePackageImports: ["@/components/icons"],
    // Disable React Compiler as it's memory-intensive
    reactCompiler: false,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Disable TypeScript type checking during build to save memory
  typescript: {
    ignoreBuildErrors: false,
  },
  // Disable ESLint during build to save memory
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
