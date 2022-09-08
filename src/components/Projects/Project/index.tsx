import { ProjectContainer, ProjectInfo } from "./styles";

interface ProjectProps {
  url: string;
  title: string;
  githubUrl: string;
  info: string;
}

export function Project({ githubUrl, info, title, url }: ProjectProps) {
  return (
    <ProjectContainer>
      <img src={url} alt={title} />

      <ProjectInfo>
        <div>
          <h1>{title}</h1>

          <p>{info}</p>
        </div>

        <a href={githubUrl} target="_blank">
          Acessar repositório
        </a>
      </ProjectInfo>
    </ProjectContainer>
  );
}
