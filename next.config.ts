/** @type {import('next').NextConfig} */
const nextConfig = {
  // تنظیمات پایه
  compress: true,
  poweredByHeader: false,
  
  // تنظیمات images
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },

  // تنظیمات compiler
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // headers برای امنیت
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
          }
        ],
      }
    ]
  }
}

module.exports = nextConfig