// Registre unique des pages CREWUP.
export const GROUPS = {
  start: "Démarrer",
  play: "Jouer",
  social: "Communauté",
  account: "Compte",
};

export const PAGES = [
  { id: "accueil", label: "Accueil", path: "index.html", group: "start", icon: "home", step: 2, nav: true, summary: "Point d'entrée de la plateforme.", planned: [] },
  { id: "connexion", label: "Connexion", path: "pages/connexion.html", group: "account", icon: "lock", step: 3, nav: false, summary: "Accès au compte joueur.", planned: [] },
  { id: "inscription", label: "Inscription", path: "pages/inscription.html", group: "account", icon: "user", step: 3, nav: false, summary: "Création d'un compte joueur.", planned: [] },
  { id: "profil", label: "Profil joueur", path: "pages/profil.html", group: "account", icon: "user", step: 3, nav: false, summary: "Identité de joueur.", planned: [] },
];

export function getPage(id) {
  return PAGES.find((p) => p.id === id);
}

export function initPages() {
  const list = document.getElementById("roadmap-list");
  if (list) {
    list.innerHTML = PAGES.filter(p => p.nav).map(p =>
      `<li class="card"><h3>${p.label}</h3><p>${p.summary}</p></li>`
    ).join("");
  }
}
