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
          Opa! Tudo bem? me chamo Gian Lucas, tenho 18 anos e sou apaixonado por
          desenvolvimento web. Atualmente estou focado em estudar a stack
          ReactJS + NextJS no front-end e NodeJS + (Express / NestJS) no
          back-end. Fiz o curso técnico em informática integrado ao ensino médio
          no IFPB e agora estou cursando Ciência da Computação na UEPB.
        </p>

        <LinkButton data-aos="fade-up" download href={GianCV} target="_blank">
          Baixar currículo
        </LinkButton>
      </div>
    </AboutContainer>
  );
}
