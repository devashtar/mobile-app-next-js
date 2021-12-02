/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  exportPathMap: 'out',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH
}
