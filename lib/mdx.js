import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { mdxComponents } from "@/components/mdx-components";

const contentDirectory = path.join(process.cwd(), "content", "projects");

async function readProjectFile(slug) {
  const filePath = path.join(contentDirectory, `${slug}.mdx`);
  return fs.readFile(filePath, "utf8");
}

export async function getAllProjects() {
  const files = await fs.readdir(contentDirectory);

  const projects = await Promise.all(
    files
      .filter((file) => file.endsWith(".mdx"))
      .map(async (file) => {
        const source = await fs.readFile(path.join(contentDirectory, file), "utf8");
        const { data } = matter(source);
        return {
          slug: file.replace(/\.mdx$/, ""),
          ...data
        };
      })
  );

  return projects.sort((left, right) => (left.order || 0) - (right.order || 0));
}

export async function getProjectSummaries() {
  return getAllProjects();
}

export async function getProjectBySlug(slug) {
  try {
    const source = await readProjectFile(slug);
    const { content, frontmatter } = await compileMDX({
      source,
      components: mdxComponents,
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [remarkGfm]
        }
      }
    });

    return { slug, content, frontmatter };
  } catch {
    return null;
  }
}
