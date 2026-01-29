import { createMDX } from 'fumadocs-mdx/next';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [25, 50, 75, 100],
  },
  reactCompiler: true,
  reactStrictMode: true,
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['turbopack-inline-svg-loader'],
        condition: {
          content: /^[\s\S]{0,4000}$/, // <-- Inline SVGs smaller than ~4Kb (since Next.js v16)
        },
        as: '*.js',
      },
    },
  },
};

const withMDX = createMDX({
  // customise the config file path
  configPath: "source.config.ts"
});

export default withMDX(nextConfig);
