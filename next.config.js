/** @type {import('next').NextConfig} */
const curPath = process.env.NEXT_PUBLIC_BASE_PATH || './'

module.exports = {
  reactStrictMode: true,
  exportPathMap: 'out',
  basePath: curPath,
  assetPrefix: curPath
}
