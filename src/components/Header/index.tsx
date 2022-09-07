import { Moon, Sun } from "phosphor-react";
import { HeaderContainer, IconButton, Link } from "./styles";

interface HeaderProps {
  toogleTheme: () => void;
  theme: "dark" | "light";
}

export function Header({ toogleTheme, theme }: HeaderProps) {
  return (
    <HeaderContainer id="header">
      <Link href="#about">Sobre mim</Link>
      <Link href="#techs">Tecnologias</Link>
      <Link href="#projects">Projetos</Link>

      <IconButton onClick={toogleTheme} title="Trocar tema">
        {theme === "dark" ? <Moon weight="bold" /> : <Sun weight="bold" />}
      </IconButton>
    </HeaderContainer>
  );
}
