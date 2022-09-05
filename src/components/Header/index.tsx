import { HeaderContainer, Link } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <Link href="#about">Sobre</Link>
      <Link href="#techs">Tecnologias</Link>
      <Link href="#projects">Projetos</Link>
      <Link href="#contact">Contato</Link>
    </HeaderContainer>
  );
}
