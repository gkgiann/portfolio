import {
  MenuClosedContainer,
  MenuContent,
  MenuIconButton,
  MenuOpenedContainer,
} from "./styles";
import { List, Moon, Sun, X } from "phosphor-react";
import { IconButton, Link } from "../Header/styles";
import { useEffect, useState } from "react";

interface MenuMobileProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  toogleTheme: () => void;
  theme: "dark" | "light";
}

export function MenuMobile({
  isOpen,
  setIsOpen,
  theme,
  toogleTheme,
}: MenuMobileProps) {
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scroll = window.scrollY;
      setScrollValue(scroll);
    });
  }, []);

  useEffect(() => {
    document.body.style.overflowY = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  function handleClickLink() {
    setIsOpen(false);
  }

  if (isOpen) {
    return (
      <MenuOpenedContainer>
        <MenuIconButton title="Fechar menu" onClick={() => setIsOpen(false)}>
          <X size={28} weight="bold" />
        </MenuIconButton>

        <MenuContent>
          <Link onClick={handleClickLink} href="#about">
            Sobre mim
          </Link>
          <Link onClick={handleClickLink} href="#techs">
            Tecnologias
          </Link>
          <Link onClick={handleClickLink} href="#projects">
            Projetos
          </Link>
          <Link onClick={handleClickLink} href="#footer">
            Contato
          </Link>

          <IconButton onClick={toogleTheme} title="Trocar tema">
            {theme === "dark" ? <Moon weight="bold" /> : <Sun weight="bold" />}
          </IconButton>
        </MenuContent>
      </MenuOpenedContainer>
    );
  }

  return (
    <MenuClosedContainer scroll={scrollValue}>
      <MenuIconButton title="Abrir menu" onClick={() => setIsOpen(true)}>
        <List size={28} weight="bold" />
      </MenuIconButton>
    </MenuClosedContainer>
  );
}
