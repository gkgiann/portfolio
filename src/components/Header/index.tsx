import { Moon, Sun } from "phosphor-react";
import { HeaderContainer, IconButton, Link } from "./styles";

interface HeaderProps {
  toogleTheme: () => void;
  theme: "dark" | "light";
}

export function Header({ toogleTheme, theme }: HeaderProps) {
  return (
    <HeaderContainer>
      <Link href="#about">Sobre</Link>
      <Link href="#techs">Tecnologias</Link>
      <Link href="#projects">Projetos</Link>
      <Link href="#contact">Contato</Link>

      <IconButton onClick={toogleTheme} title="Trocar tema">
        {theme === "dark" ? <Moon weight="bold" /> : <Sun weight="bold" />}
      </IconButton>
    </HeaderContainer>
  );
}
