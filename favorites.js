// ============================================================
// favorites.js — logic specific to favorites.html
// ============================================================
const favoritesGrid = document.getElementById("favoritesGrid");
const favoritesStatus = document.getElementById("favoritesStatus");
const favoritesEmpty = document.getElementById("favoritesEmpty");

renderFavoritesPage();

// called by common.js whenever a favorite is added/removed from any card on this page
window.onFavoritesChanged = renderFavoritesPage;

function renderFavoritesPage() {
  if (favorites.length === 0) {
    favoritesGrid.innerHTML = "";
    favoritesGrid.style.display = "none";
    favoritesEmpty.style.display = "block";
    favoritesStatus.textContent = "";
    return;
  }
  favoritesGrid.style.display = "flex";
  favoritesEmpty.style.display = "none";
  favoritesStatus.textContent = favorites.length + " saved recipe" + (favorites.length > 1 ? "s" : "");
  renderRecipeCards(favoritesGrid, favorites);
}