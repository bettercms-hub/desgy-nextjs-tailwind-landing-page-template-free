/** @type {import('next').NextConfig} */
const nextConfig = {
  // @bettercms-ai/next depends on this package, which ships TypeScript source.
  transpilePackages: ['@bettercms-ai/richtext'],
  // ponytail: the SDK's server-only reads (fs, dns) reach the client bundle through
  // @bettercms-ai/next's blocks; they never run in the browser, so stub them there.
  webpack: (config, { isServer }) => {
    if (!isServer) config.resolve.fallback = { ...config.resolve.fallback, 'fs/promises': false, 'dns/promises': false }
    return config
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
