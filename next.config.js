/** @type {import('next').NextConfig} */
const path = require('path')
module.exports = {
  trailingSlash: true,
  reactStrictMode: false,
  basePath: process.env.NODE_ENV === 'development' ? '' : '/themes/consult-react/app',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  pageExtensions: ['pages.ts', 'page.tsx']
}
