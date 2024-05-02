/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'public',
            }
        ]
    },
    experimental: {
        serverActions: true,
    }
}

module.exports = nextConfig
