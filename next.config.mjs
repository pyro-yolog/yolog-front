/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'c4.wallpaperflare.com',
      },
      {
        protocol: 'https',
        hostname: 'www.tvtime.com',
      },
      {
        protocol: 'https',
        hostname: 'dbkpop.com',
      },
      {
        protocol: 'https',
        hostname: 't2.daumcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://yolog.store:8080/:path*',
      },
    ];
  },
};

export default nextConfig;
