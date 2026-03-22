import { createMDX } from 'fumadocs-mdx/next';
import { fileURLToPath } from 'url';
import path from 'path';

// Configure which packages in node_modules to watch for changes
// Add package names to this array to enable hot reload for them
const packagesToWatch = [
  // Add more packages as needed
];


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  webpack: (config, { isServer, dev }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@q1k-oss/kiban": path.resolve(__dirname, "components/*"),
    };

    // Enable hot reload for node_modules in development mode
    if (dev) {
      // Configure webpack to watch node_modules
      config.watchOptions = {
        ...config.watchOptions,
        // poll: 1000, // Check for changes every second
        // aggregateTimeout: 300, // Delay rebuild by 300ms
        ignored: [
          '**/node_modules/**',
        ],
      };
      
      // Watch specific packages if configured
      if (packagesToWatch.length > 0) {
        // Remove the general node_modules ignore pattern
        config.watchOptions.ignored = config.watchOptions.ignored.filter(
          pattern => pattern !== '**/node_modules/**'
        );
        
        // Add specific package patterns to watch
        packagesToWatch.forEach(pkg => {
          config.watchOptions.ignored.push(`!**/node_modules/${pkg}/**`);
        });
      }
    }

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
