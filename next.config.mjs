const isStaticExport = process.env.STATIC_EXPORT === "true";

/** @type {import("next").NextConfig} */
const nextConfig = {
  output: isStaticExport ? "export" : undefined,
  images: {
    unoptimized: isStaticExport
  }
};

export default nextConfig;
