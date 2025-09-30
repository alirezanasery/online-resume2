/** @type {import('next').NextConfig} */
const nextConfig = {
  // تنظیمات بهینه‌سازی performance
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  
  // تنظیمات images
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // تنظیمات compiler برای بهینه‌سازی
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // تنظیمات experimental برای performance
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },

  // headers برای امنیت و performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig