const isStaticExport = process.env.STATIC_EXPORT === "true";
const basePath = isStaticExport ? process.env.PAGES_BASE_PATH || "" : "";

/** @type {import("next").NextConfig} */
const nextConfig = {
  output: isStaticExport ? "export" : undefined,
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: isStaticExport,
  images: {
    unoptimized: isStaticExport
  }
};

export default nextConfig;
