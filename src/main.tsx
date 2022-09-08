import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { PrismicProvider } from "@prismicio/react";
import { clientPrismic } from "./lib/prismic";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <PrismicProvider client={clientPrismic}>
      <App />
    </PrismicProvider>
  </React.StrictMode>
);
