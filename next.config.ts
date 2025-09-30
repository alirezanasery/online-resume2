/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // غیرفعال کردن features پیشرفته برای compatibility
    removeConsole: false,
  },
  experimental: {
    // غیرفعال کردن experimental features
  },
  // هدف قرار دادن مرورگرهای قدیمی
  targets: {
    ie: 11,
  },
}

module.exports = nextConfig