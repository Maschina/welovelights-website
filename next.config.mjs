import nextra from 'nextra';

/** @type {import('next').NextConfig} */
const nextConfig = {
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

const withNextra = nextra({
  contentDirBasePath: '/docs', // serve the content under the "/docs" path
  // search: false, // disable search
});

export default withNextra(nextConfig);
