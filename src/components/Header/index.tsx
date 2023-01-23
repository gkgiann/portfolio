import { Moon, Sun } from "phosphor-react";
import { useState, useEffect } from "react";
import { HeaderContainer, IconButton, Link } from "./styles";

interface HeaderProps {
  toogleTheme: () => void;
  theme: "dark" | "light";
}

export function Header({ toogleTheme, theme }: HeaderProps) {
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scroll = window.scrollY;
      setScrollValue(scroll);
    });
  }, []);

  return (
    <HeaderContainer scroll={scrollValue}>
      <Link href="#about">Sobre mim</Link>
      <Link href="#techs">Tecnologias</Link>
      <Link href="#projects">Projetos</Link>
      <Link href="#footer">Contato</Link>

      <IconButton onClick={toogleTheme} title="Trocar tema">
        {theme === "dark" ? <Moon weight="bold" /> : <Sun weight="bold" />}
      </IconButton>
    </HeaderContainer>
  );
}
