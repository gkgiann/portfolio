import { AboutContainer, LinkButton } from "./styles";

export function About() {
  return (
    <AboutContainer id="about">
      <img
        src="https://avatars.githubusercontent.com/u/67169105?v=4"
        alt="Gian Lucas"
      />

      <div>
        <h1>Sobre mim</h1>
        <p>
          Opa! Tudo bem? me chamo Gian Lucas, tenho 17 anos e sou apaixonado por
          desenvolvimento web. Atualmente estou focado em estudar a stack
          ReactJS + NextJS e algumas libs como o TailwindCSS, Sass e
          styled-components. Fiz o curso técnico em informática integrado ao
          ensino médio no IFPB e agora estou cursando Ciência da Computação na
          UEPB.
        </p>

        <LinkButton href="mailto:lgian584@gmail.com" target="_blank">
          Entre em contato
        </LinkButton>
      </div>
    </AboutContainer>
  );
}
