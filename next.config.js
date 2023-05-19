/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: process.env.BASE_PATH,
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL || 'https://pipedrive-v1.onrender.com/home/api/auth',
    BASE_PATH:  process.env.BASE_PATH || '/home',
  }
}

module.exports = nextConfig


