# CREWUP — Architecture

## Principes

1. **Modularité :** une fonctionnalité = un module autonome (`frontend/modules/<x>` + `backend/workers/<x>`).
2. **Indépendance des fournisseurs :** les modules parlent à des interfaces (`frontend/services/`), jamais à un SDK fournisseur. Changer de fournisseur = réécrire un adaptateur.
3. **Zéro secret public :** le front ne détient que des valeurs publiques. Tout secret vit chez le fournisseur et n'est lu que par une fonction serveur.
4. **Simplicité d'abord :** pas de framework ni de build tant qu'un besoin réel ne l'impose pas (ADR-0001).
5. **Coût maîtrisé :** services à plan gratuit, aucune connexion payante sans validation.

Voir le dépôt complet pour le reste du document.
