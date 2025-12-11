import type { NextConfig } from 'next';

const config: NextConfig = {
    reactStrictMode: true,
    output: 'export',
    distDir: 'build',
    images: {
        unoptimized: true,
    }
}

export default config;
