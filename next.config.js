/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: true,
  exportPathMap: 'out',
  basePath: isProd ? '/mobile-app-next-js' : './',
  assetPrefix: isProd ? '/mobile-app-next-js' : './'
}
