// Registre unique des pages CREWUP.
// Ajouter une page = ajouter une entrée ici + créer son fichier HTML.
// Aucune donnée utilisateur ici : uniquement la structure du site.

export const GROUPS = {
  start: "Démarrer",
  play: "Jouer",
  social: "Communauté",
  account: "Compte",
};

export const PAGES = [
  { id: "accueil", label: "Accueil", path: "index.html", group: "start", icon: "home", step: 2, nav: true,
    summary: "Point d'entrée de la plateforme.", planned: [] },
  { id: "connexion", label: "Connexion", path: "pages/connexion.html", group: "account", icon: "lock", step: 3, nav: false,
    summary: "Accès au compte joueur.", planned: ["Connexion par e-mail", "Connexion via fournisseurs externes", "Récupération du mot de passe"] },
  { id: "inscription", label: "Inscription", path: "pages/inscription.html", group: "account", icon: "user", step: 3, nav: false,
    summary: "Création d'un compte joueur.", planned: ["Création de compte", "Validation de l'adresse e-mail", "Choix du pseudo"] },
  { id: "profil", label: "Profil joueur", path: "pages/profil.html", group: "account", icon: "user", step: 3, nav: false,
    summary: "Identité de joueur, jeux, disponibilités.", planned: ["Pseudo et avatar", "Jeux et plateformes", "Disponibilités et langues"] },
  { id: "communaute", label: "Communauté", path: "pages/communaute.html", group: "social", icon: "users", step: 9, nav: true,
    summary: "Espace d'échange entre joueurs.", planned: ["Fil de la communauté", "Publications et réponses", "Modération"] },
  { id: "trouver-joueurs", label: "Trouver des joueurs", path: "pages/trouver-joueurs.html", group: "play", icon: "search", step: 5, nav: true,
    summary: "Recherche et mise en relation de joueurs compatibles.", planned: ["Filtres jeu, niveau, horaires", "Suggestions de joueurs compatibles", "Demandes de contact"] },
  { id: "sessions", label: "Sessions", path: "pages/sessions.html", group: "play", icon: "gamepad", step: 6, nav: true,
    summary: "Planifier et rejoindre des sessions de jeu.", planned: ["Création de session", "Inscription et liste d'attente", "Rappels"] },
];

export function getPage(id) {
  return PAGES.find((p) => p.id === id);
}

export function initPages() {
  // Placeholder for roadmap rendering
  const list = document.getElementById("roadmap-list");
  if (list) {
    list.innerHTML = PAGES.filter(p => p.nav).map(p =>
      `<li class="card"><h3>${p.label}</h3><p>${p.summary}</p></li>`
    ).join("");
  }
}
