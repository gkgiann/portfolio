import { useState, useEffect } from "react";
import { useAllPrismicDocumentsByType } from "@prismicio/react";
import { ProjectsContainer, ProjectsList } from "./styles";
import { Project } from "./Project";

interface Project {
  url: string;
  title: string;
  githubUrl: string;
  info: string;
}

export function Projects() {
  const [results, { state }] = useAllPrismicDocumentsByType("project");
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    if (results !== undefined) {
      const projectsFormatted = results.map((project) => {
        const data = project.data;
        return {
          title: data.title[0].text,
          info: data.description[0].text,
          url: data.image.url,
          githubUrl: data.url.url,
        };
      });
      setProjects(projectsFormatted);
    }
  }, [results]);

  if (state === "loading") {
    return <ProjectsContainer>Carregando...</ProjectsContainer>;
  }

  return (
    <ProjectsContainer id="projects">
      <h1 data-aos="fade-right">Alguns projetos</h1>

      <ProjectsList>
        {projects.map((project) => {
          return <Project key={project.url} {...project} />;
        })}
      </ProjectsList>
    </ProjectsContainer>
  );
}
