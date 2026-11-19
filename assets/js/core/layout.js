// En-tête, navigation et pied de page partagés par toutes les pages.
import { PAGES, GROUPS, getPage } from "./pages.js";

export function icon(name, cls = "icon") {
  return `<svg class="${cls}" aria-hidden="true"><use href="${icon.root}assets/icons/sprite.svg#i-${name}"></use></svg>`;
}
icon.root = "./";

const url = (root, page) => root + page.path;

export function renderHeader(root, currentId) {
  const link = (p, extra = "") =>
    `<a class="nav__link ${extra}" href="${url(root, p)}"${p.id === currentId ? ' aria-current="page"' : ""}>${p.label}</a>`;

  const nav = PAGES.filter((p) => p.nav).map((p) => `<li>${link(p)}</li>`).join("");
  const login = getPage("connexion");
  const signup = getPage("inscription");

  return `
  <header class="site-header" id="site-header" data-open="false">
    <div class="container site-header__inner">
      <a class="brand" href="${root}index.html" aria-label="CREWUP — Accueil">
        <span class="brand__mark">CREW</span><span>UP</span>
      </a>
      <div class="site-header__panel" id="main-nav">
        <nav class="nav" aria-label="Navigation principale">
          <ul class="nav__list">${nav}</ul>
        </nav>
        <div class="site-header__actions">
          <a class="btn btn--ghost" href="${url(root, login)}">Connexion</a>
          <a class="btn btn--primary" href="${url(root, signup)}">Inscription</a>
        </div>
      </div>
      <button class="nav-toggle" id="nav-toggle" aria-controls="main-nav" aria-expanded="false">
        Menu
      </button>
    </div>
  </header>`;
}

export function renderFooter(root) {
  return `
  <footer class="site-footer">
    <div class="container">
      <p>© ${new Date().getFullYear()} CREWUP — Plateforme en construction.</p>
    </div>
  </footer>`;
}

export function initLayout() {
  const root = document.body.dataset.root || "./";
  const current = document.body.dataset.page;
  document.getElementById("app-header").innerHTML = renderHeader(root, current);
  document.getElementById("app-footer").innerHTML = renderFooter(root);
}
