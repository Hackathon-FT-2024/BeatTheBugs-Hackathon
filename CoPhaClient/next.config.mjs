/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
      dirs: ["src"],
    },
  async redirects() {
      return [
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
