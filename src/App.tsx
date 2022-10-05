import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ThemeProvider } from "styled-components";
import { About } from "./components/About";
import { ButtonToTop } from "./components/ButtonToTop";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { Techs } from "./components/Techs";
import { GlobalStyle } from "./styles/global";
import { darkTheme } from "./styles/themes/dark";
import { lightTheme } from "./styles/themes/light";
import { MenuMobile } from "./components/MenuMobile";

export function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [menuMobileIsOpen, setMenuMobileIsOpen] = useState(false);

  function setIsOpen(isOpen: boolean) {
    setMenuMobileIsOpen(isOpen);
  }

  function toogleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />

      <MenuMobile
        toogleTheme={toogleTheme}
        theme={theme}
        isOpen={menuMobileIsOpen}
        setIsOpen={setIsOpen}
      />
      <Header toogleTheme={toogleTheme} theme={theme} />

      <Home />
      <About />
      <Techs />
      <Projects />
      <Footer />

      <ButtonToTop />
    </ThemeProvider>
  );
}
