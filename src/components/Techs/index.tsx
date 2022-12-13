import { TechsContainer, TechsDiv } from "./styles";
import { Tech } from "./Tech";

export function Techs() {
  return (
    <TechsContainer id="techs">
      <h1 data-aos="fade-right">Tecnologias</h1>

      <TechsDiv>
        <Tech
          title="HTML5"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        />

        <Tech
          title="CSS3"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        />

        <Tech
          title="JavaScript"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        />

        <Tech
          title="TypeScript"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
        />

        <Tech
          title="ReactJS"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        />

        <Tech
          title="NextJS"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
        />

        <Tech
          title="TailwindCSS"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
        />

        <Tech
          title="Sass"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
        />

        <Tech
          title="NodeJS"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        />

        <Tech
          title="NestJS"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg"
        />

        <Tech
          title="Express"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
        />

        <Tech
          title="GitHub"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
        />

        <Tech
          title="Git"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
        />
      </TechsDiv>
    </TechsContainer>
  );
}
