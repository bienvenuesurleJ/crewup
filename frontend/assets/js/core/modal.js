// Gestion des modales (placeholder étape 1)
export function openModal(id) {
  const el = document.getElementById(id);
  if (el) el.showModal();
}
export function closeModal(id) {
  const el = document.getElementById(id);
  if (el) el.close();
}
