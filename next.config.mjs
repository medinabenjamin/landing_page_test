/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/foto_perfil_web.jpg',
          destination: '/Marcela-Equipo.png'
        }
      ]
    };
  }
};

export default nextConfig;
