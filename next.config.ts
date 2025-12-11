import type { NextConfig } from 'next';

const config: NextConfig = {
    reactStrictMode: true,
    output: 'standalone',
    distDir: 'build',
}

export default config;
