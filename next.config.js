/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  images: {
    domains: [
      
      'cdn.sanity.io'
    ],
  },

  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'fr',
  },
  

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}
