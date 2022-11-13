
// Suppression de la variable locale
export function removeItem(itemToRemove) {
    window.localStorage.removeItem(itemToRemove);
}
// Récupération de la variable locale
export function getItem(item) {
    return window.localStorage.getItem(item);
}
// Ajout d'un nouvel element dans la variable
export function addItem(localeStorageName, newItem) {
    window.localStorage.setItem(localeStorageName, newItem);
}
