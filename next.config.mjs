import { createMDX } from 'fumadocs-mdx/next';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "ethereal-ui": path.resolve(__dirname, "components/*"),
    };
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback ?? {},
        fs: false,
        path: false,
      };
    }
    return config;
  },
};

export default withMDX(config);
