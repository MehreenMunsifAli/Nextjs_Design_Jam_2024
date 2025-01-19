/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        // remotePatterns: [
        //     {
        //         protocol: 'https',
        //         hostname: 'cdn.sanity.io',
        //         port: '',
        //         pathname: '/images/ghi85048/production/**',
        //     },
        // ],
        domains: ['cdn.sanity.io'],
        
    },
};

export default nextConfig;
