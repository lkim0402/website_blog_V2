/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com", "i.imgur.com", "images.unsplash.com"],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
