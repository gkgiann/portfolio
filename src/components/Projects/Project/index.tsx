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
      <img data-aos="fade-right" src={url} alt={title} />

      <ProjectInfo>
        <div>
          <h1 data-aos="fade-down">{title}</h1>

          <p data-aos="zoom-in"> {info}</p>
        </div>

        <a data-aos="fade-up" href={githubUrl} target="_blank">
          Acessar repositório
        </a>
      </ProjectInfo>
    </ProjectContainer>
  );
}
