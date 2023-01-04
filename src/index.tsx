import { createRoot } from "react-dom/client";
import React from "react";
import App from "./app";
import { CharactersProvider } from "./context/ContextProvider";

const dom = document.getElementById("app");
const root = createRoot(dom);
root.render(
  <CharactersProvider>
    <App />
  </CharactersProvider>
);
