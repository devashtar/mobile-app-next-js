/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: true,
  exportPathMap: 'out',
  assetPrefix: isProd ? 'https://devashtar.github.io/mobile-app-next-js' : './'
}
