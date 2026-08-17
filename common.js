// ============================================================
// common.js — shared across all pages (Home, Categories, Favorites, About, Contact)
// ============================================================
const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

// ---- Dark mode (runs on every page) ----
(function initDarkMode() {
  if (localStorage.getItem("darkMode") === "on") {
    document.body.classList.add("dark-mode");
  }
  document.addEventListener("DOMContentLoaded", function () {
    let btn = document.getElementById("darkModeBtn");
    if (!btn) return;
    btn.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");
      localStorage.setItem("darkMode", document.body.classList.contains("dark-mode") ? "on" : "off");
    });
  });
})();

// ---- Mark active nav link based on current file name ----
document.addEventListener("DOMContentLoaded", function () {
  let path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".navbar .nav-link").forEach(link => {
    let href = link.getAttribute("href");
    if (href === path) {
      link.classList.add("active");
    }
  });
});

// ---- Toast notification ----
function showToast(message) {
  let toastEl = document.getElementById("appToast");
  let toastBody = document.getElementById("appToastBody");
  if (!toastEl || !toastBody) return;
  toastBody.textContent = message;
  let toast = new bootstrap.Toast(toastEl, { delay: 2000 });
  toast.show();
}

// ---- Favorites ----
function isFavorite(id) {
  return favorites.some(f => f.idMeal === id);
}

function toggleFavorite(meal, heartEl) {
  let index = favorites.findIndex(f => f.idMeal === meal.idMeal);
  let added = false;
  if (index === -1) {
    favorites.push(meal);
    added = true;
  } else {
    favorites.splice(index, 1);
  }
  localStorage.setItem("favorites", JSON.stringify(favorites));

  if (heartEl) {
    heartEl.classList.add("pop");
    setTimeout(() => heartEl.classList.remove("pop"), 400);
  }

  showToast(added ? "Added to favorites" : "Removed from favorites");

  document.querySelectorAll('.fav-heart[data-id="' + meal.idMeal + '"]').forEach(el => {
    el.classList.toggle("active", isFavorite(meal.idMeal));
  });

  // if a page-specific refresh function exists (e.g. favorites page list), call it
  if (typeof window.onFavoritesChanged === "function") {
    window.onFavoritesChanged();
  }
}

// ---- Skeleton loading cards ----
function showSkeleton(gridEl, count) {
  if (!gridEl) return;
  gridEl.innerHTML = "";
  for (let i = 0; i < count; i++) {
    let col = document.createElement("div");
    col.className = "col-6 col-md-4 col-lg-3";
    col.innerHTML = `
      <div class="skeleton-card">
        <div class="skeleton-img"></div>
        <div class="skeleton-line" style="width: 70%;"></div>
      </div>
    `;
    gridEl.appendChild(col);
  }
}

// ---- Render recipe cards into a given grid element ----
function renderRecipeCards(gridEl, meals) {
  if (!gridEl) return;
  gridEl.innerHTML = "";

  meals.forEach((meal, i) => {
    let favActive = isFavorite(meal.idMeal) ? "active" : "";
    let thumb = meal.strMealThumb ? meal.strMealThumb : "https://placehold.co/300x200?text=No+Image";

    let col = document.createElement("div");
    col.className = "col-6 col-md-4 col-lg-3";

    col.innerHTML = `
      <div class="card recipe-card" style="--i:${i % 12}">
        <button class="fav-heart ${favActive}" data-id="${meal.idMeal}">&#10084;</button>
        <div class="recipe-card-clickable" data-id="${meal.idMeal}">
          <img src="${thumb}" class="card-img-top" alt="${meal.strMeal}" onerror="this.src='https://placehold.co/300x200?text=No+Image'">
          <div class="card-body">
            <h6 class="card-title">${meal.strMeal}</h6>
          </div>
        </div>
      </div>
    `;

    col.querySelector(".recipe-card-clickable").addEventListener("click", function () {
      openRecipe(meal.idMeal);
    });

    let heartEl = col.querySelector(".fav-heart");
    heartEl.addEventListener("click", function (e) {
      e.stopPropagation();
      toggleFavorite(meal, heartEl);
    });

    gridEl.appendChild(col);
  });
}

// ---- Recipe detail modal (used on pages that include #recipeModal) ----
function openRecipe(id) {
  let modalEl = document.getElementById("recipeModal");
  if (!modalEl) return;
  let recipeModal = bootstrap.Modal.getOrCreateInstance(modalEl);
  let modalTitle = document.getElementById("modalTitle");
  let modalBody = document.getElementById("modalBody");

  modalBody.innerHTML = `
    <div class="text-center my-4">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  `;
  recipeModal.show();

  fetch(BASE_URL + "/lookup.php?i=" + id)
    .then(res => res.json())
    .then(data => {
      let meal = data.meals[0];
      modalTitle.textContent = meal.strMeal;

      let ingredientsHTML = "<ul class='ingredient-list'>";
      let n = 0;
      for (let i = 1; i <= 20; i++) {
        let ing = meal["strIngredient" + i];
        let measure = meal["strMeasure" + i];
        if (ing && ing.trim() !== "") {
          ingredientsHTML += `<li style="--n:${n}">${measure} ${ing}</li>`;
          n++;
        }
      }
      ingredientsHTML += "</ul>";

      let ytBtn = "";
      if (meal.strYoutube) {
        ytBtn = `<a href="${meal.strYoutube}" target="_blank" class="btn btn-danger btn-sm mt-2">Watch on YouTube</a>`;
      }

      modalBody.innerHTML = `
        <img src="${meal.strMealThumb}" onerror="this.src='https://placehold.co/600x400?text=No+Image'">
        <p><strong>Category:</strong> ${meal.strCategory} | <strong>Area:</strong> ${meal.strArea}</p>
        <h6>Ingredients</h6>
        ${ingredientsHTML}
        <h6>Instructions</h6>
        <p>${meal.strInstructions}</p>
        ${ytBtn}
      `;
    })
    .catch(err => {
      modalBody.innerHTML = "<p class='text-danger'>Could not load recipe details. Please try again.</p>";
      console.log(err);
    });
}