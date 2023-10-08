/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'www.bgmi.edu.bd',
            port: '',
            pathname: '/public/teacher_image/**',
          },
        ],
      },
}

module.exports = nextConfig
