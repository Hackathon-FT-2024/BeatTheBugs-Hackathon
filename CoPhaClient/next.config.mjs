/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
      dirs: ["src"],
    },
  async redirects() {
      return [
        ...['/about', '/contact'].map(source => ({ source, destination: '/maintenance', permanent: false})),
        { 
          source: '/login',
          destination: '/auth/login',
          permanent: true
        },          
        { 
          source: '/signup',
          destination: '/auth/signup',
          permanent: true
        },
      ]
    },
};

export default nextConfig;
