import { createRoot } from "react-dom/client";
import React from "react";
import App from "./app";

const dom = document.getElementById("app");
const root = createRoot(dom);
root.render(<App />);
