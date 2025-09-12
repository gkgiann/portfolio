import { clientPrismic } from "../lib/prismic";
import type { Project } from "../types/project";

export const fetchProjects = async (): Promise<Project[]> => {
  const result = await clientPrismic.getAllByType("project");

  const projects: Project[] = result.map((p) => ({
    title: p.data.title[0].text,
    description: p.data.description[0].text,
    imageUrl: p.data.image.url,
    githubRepoUrl: p.data.url.url,
  }));

  return projects;
};
