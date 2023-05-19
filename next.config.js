/** @type {import('next').NextConfig} */

const nextConfig = {
    basePath: process.env.BASE_PATH,
    assetPrefix: process.env.ASSET_PREFIX,
    env: {
        NEXTAUTH_URL: process.env.NEXTAUTH_URL,
        BASE_PATH:  process.env.BASE_PATH,
        ASSET_PREFIX: process.env.ASSET_PREFIX,
    }
}

module.exports = nextConfig


