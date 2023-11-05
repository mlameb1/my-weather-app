
import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom";
import Weather from "./Weather";


import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div>
    <App />
    <Weather />
    </div>
  </StrictMode>
);

