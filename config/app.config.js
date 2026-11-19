// Configuration PUBLIQUE du front-end CREWUP.
// Ce fichier est visible par tout visiteur : n'y mettre AUCUN secret.
// Seules valeurs publiques admises : URL de projet et clé "anon" Supabase (protégée par RLS).
// Valeurs volontairement vides à l'étape 1 : aucun service n'est connecté.

export const config = {
  appName: "CREWUP",
  environment: "development",
  supabase: {
    url: "",
    anonKey: "",
  },
  api: {
    baseUrl: "", // URL des fonctions serveur (Cloudflare Workers) — étape 8/11
  },
};
