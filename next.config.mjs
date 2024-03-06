/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '8080',
                pathname: '/assets/**',
            },
        ],
    },
    output: 'standalone',
};


export default nextConfig;