import { Tech, TechsContainer, TechsDiv } from "./styles";

export function Techs() {
  return (
    <TechsContainer id="techs">
      <h1>Tecnologias</h1>

      <TechsDiv>
        <Tech>
          <img
            alt="HTML5"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          />
          <strong>HTML5</strong>
        </Tech>

        <Tech>
          <img
            alt="CSS3"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          />
          <strong>CSS3</strong>
        </Tech>

        <Tech>
          <img
            alt="JavaScript"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          />
          <strong>JavaScript</strong>
        </Tech>

        <Tech>
          <img
            alt="TypeScript"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
          />
          <strong>TypeScript</strong>
        </Tech>

        <Tech>
          <img
            alt="ReactJS"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          />
          <strong>ReactJS</strong>
        </Tech>

        <Tech>
          <img
            alt="NextJS"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
          />
          <strong>NextJS</strong>
        </Tech>

        <Tech>
          <img
            alt="TailwindCSS"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
          />
          <strong>TailwindCSS</strong>
        </Tech>

        <Tech>
          <img
            alt="Sass"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
          />
          <strong>Sass</strong>
        </Tech>

        <Tech>
          <img
            alt="GitHub"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          />
          <strong>GitHub</strong>
        </Tech>

        <Tech>
          <img
            alt="Git"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
          />
          <strong>Git</strong>
        </Tech>
      </TechsDiv>
    </TechsContainer>
  );
}
