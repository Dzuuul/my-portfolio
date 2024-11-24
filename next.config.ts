/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Mengoptimalkan development performance
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // Menonaktifkan source maps di development
      config.devtool = false;
    }
    return config;
  },
  // Konfigurasi development server
  experimental: {
    optimizeCss: true,
  },
  // Mengatur output directory
  distDir: '.next',
  // Konfigurasi development server
  webpackDevMiddleware: config => {
    // Menambah timeout untuk development server
    config.watchOptions = {
      poll: 1000, // Check for changes every second
      aggregateTimeout: 300, // Delay before rebuilding
    }
    return config
  },
  // Konfigurasi server
  serverRuntimeConfig: {
    // Menambah timeout untuk koneksi
    maxAge: '7d',
    staleWhileRevalidate: '7d'
  },
  // Konfigurasi build
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,
}

export default nextConfig
