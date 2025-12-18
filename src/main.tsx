import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/theme.css"; // design tokens (colors, spacing, shadows, etc.)
import "./index.css"; // global resets + base element styles
import "./App.css"; // app-wide layout helpers

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
