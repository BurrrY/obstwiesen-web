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
    env: {
        GQL_HOST: process.env.NEXT_PUBLIC_GQL_HOST,
    },
};


export default nextConfig;
