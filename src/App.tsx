import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
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

      <h1>Hello World</h1>
    </ThemeProvider>
  );
}
