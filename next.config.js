module.exports = {
  swcMinify: true,
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
}
