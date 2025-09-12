import { useState } from "react";
import { fetchProjects } from "../../services/prismic";
import type { Project as ProjectType } from "../../types/project";
import Project from "./Project";

const ProjectsList = () => {
  const [projects, setProjects] = useState<ProjectType[]>([]);

  useState(() => {
    const fetchData = async () => {
      const data = await fetchProjects();
      setProjects(data);
    };
    fetchData();
  });

  return (
    <section id="projects" className="pt-20 w-full mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-violet-600 mb-12 text-center">
        Projetos
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsList;
