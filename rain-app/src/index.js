import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./Header";
import Content from "./Content";

import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import InteractiveContent from "./InteractiveContent";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Header />
    <App />
    <Content />
    <InteractiveContent />
  </StrictMode>
);
