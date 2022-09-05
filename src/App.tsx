import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { darkTheme } from "./styles/themes/dark";

export function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />

      <Header />

      <h1>Hello World</h1>
    </ThemeProvider>
  );
}
