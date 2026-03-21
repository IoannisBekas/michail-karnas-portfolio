import { getAllProjects } from "@/lib/mdx";

export default async function sitemap() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://michailkarnas.com";
  const projects = await getAllProjects();

  return [
    {
      url: siteUrl,
      lastModified: new Date()
    },
    ...projects.map((project) => ({
      url: `${siteUrl}/work/${project.slug}`,
      lastModified: new Date()
    }))
  ];
}
