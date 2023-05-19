/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: process.env.BASE_PATH,
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    BASE_PATH:  process.env.BASE_PATH,
  }
}

module.exports = nextConfig


