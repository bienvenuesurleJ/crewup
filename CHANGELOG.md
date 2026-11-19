# Journal des modifications

Format inspiré de [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/). Versions mineures = une étape validée.

## [0.1.0] — 2026-11-19 — Étape 1 : fondations (en attente de validation)

### Ajouté
- Arborescence modulaire : `frontend/`, `backend/workers/`, `database/`, `config/`, `docs/`, `scripts/`.
- 18 pages (Accueil + 17 coquilles) pilotées par un registre unique, sans donnée fictive.
- Design system : tokens, base, mise en page, composants (boutons, cartes, badges, champs, menus, modales, icônes), animations, responsive.
- Guide de style `frontend/dev/design-system.html`.
- 14 modules front et 11 modules serveur documentés (README), non implémentés.
- Documentation : `PROJECT_STATUS.md`, `ARCHITECTURE.md`, `CHANGELOG.md`, `README.md`, 2 ADR.
- Outils sans dépendance : `npm run dev` (serveur local), `npm run check` (vérifications).
- Intégration continue GitHub Actions (gratuite) exécutant `npm run check`.

### Modifié
- Aucun fichier existant (le projet partait d'un environnement vide).

### Supprimé
- Rien.
