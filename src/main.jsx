import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/header";
import Inputs from "./components/Inputs";
import "./styles/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Inputs />
  </StrictMode>
);
