import { AboutContainer, LinkButton } from "./styles";

import GianCV from "../../assets/gianCV.pdf";

export function About() {
  return (
    <AboutContainer id="about">
      <img
        data-aos="fade-right"
        src="https://avatars.githubusercontent.com/u/67169105?v=4"
        alt="Gian Lucas"
      />

      <div>
        <h1 data-aos="fade-down">Sobre mim</h1>
        <p data-aos="zoom-in">
          Opa! Tudo bem? me chamo Gian Lucas, tenho 20 anos e sou apaixonado por
          desenvolvimento web. Tenho mais afinidade com a stack ReactJS + NextJS
          + NodeJS. Além disso, tenho uma base bem sólida em Java e Python. Fiz
          o curso técnico em informática integrado ao ensino médio no IFPB e
          agora estou cursando Ciência da Computação na UEPB.
        </p>

        <LinkButton data-aos="fade-up" download href={GianCV} target="_blank">
          Baixar currículo
        </LinkButton>
      </div>
    </AboutContainer>
  );
}
