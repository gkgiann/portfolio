import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { About } from "./components/About";
import { ButtonToTop } from "./components/ButtonToTop";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Techs } from "./components/Techs";
import { GlobalStyle } from "./styles/global";
import { darkTheme } from "./styles/themes/dark";
import { lightTheme } from "./styles/themes/light";

export function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  function toogleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />

      <Header toogleTheme={toogleTheme} theme={theme} />

      <Home />
      <About />
      <Techs />
      <Footer />

      <ButtonToTop />
    </ThemeProvider>
  );
}
