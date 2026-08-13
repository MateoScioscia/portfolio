import fs from "node:fs";
import path from "node:path";
import { projects, type Project } from "@/content/site";

/**
 * Drops `image` paths whose file isn't in public/ yet, so a project without a
 * screenshot falls back to its initial tile instead of a broken image.
 * Server-only: reads the filesystem at build time.
 */
export function resolvedProjects(): Project[] {
  return projects.map((project) => {
    if (!project.image) return project;
    const onDisk = path.join(process.cwd(), "public", project.image);
    return fs.existsSync(onDisk) ? project : { ...project, image: undefined };
  });
}

export function getProject(slug: string): Project | undefined {
  return resolvedProjects().find((project) => project.slug === slug);
}
