/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/EQUIPO_MARCELA.webp',
        headers: [
          {
            key: 'Content-Type',
            value: 'image/png'
          }
        ]
      }
    ];
  }
};

export default nextConfig;
