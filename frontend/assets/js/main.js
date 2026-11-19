// Point d'entrée principal CREWUP
import { initLayout } from "./core/layout.js";
import { initPages } from "./core/pages.js";

document.addEventListener("DOMContentLoaded", () => {
  initLayout();
  initPages();
});
