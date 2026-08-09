// base api url (free, no key needed)
const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const resultsGrid = document.getElementById("resultsGrid");
const statusText = document.getElementById("status");
const categoryRow = document.getElementById("categoryRow");
const randomBtn = document.getElementById("randomBtn");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

const recipeModal = new bootstrap.Modal(document.getElementById("recipeModal"));

// load some categories on start
loadCategories();
searchRecipes("chicken");

searchForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let term = searchInput.value.trim();
  if (term == "") return;
  searchRecipes(term);
});

randomBtn.addEventListener("click", function () {
  fetch(BASE_URL + "/random.php")
    .then(res => res.json())
    .then(data => {
      showRecipes(data.meals);
      statusText.textContent = "Here's a random one for you";
    });
});

function searchRecipes(query) {
  statusText.textContent = "Searching...";
  resultsGrid.innerHTML = "";

  fetch(BASE_URL + "/search.php?s=" + query)
    .then(res => res.json())
    .then(data => {
      if (!data.meals) {
        statusText.textContent = "No recipes found for \"" + query + "\"";
        return;
      }
      statusText.textContent = data.meals.length + " results for \"" + query + "\"";
      showRecipes(data.meals);
    })
    .catch(err => {
      statusText.textContent = "Something went wrong, try again";
      console.log(err);
    });
}

function loadCategories() {
  fetch(BASE_URL + "/list.php?c=list")
    .then(res => res.json())
    .then(data => {
      let categories = data.meals.slice(0, 8);
      categories.forEach(cat => {
        let btn = document.createElement("button");
        btn.className = "btn btn-sm btn-outline-dark cat-btn";
        btn.textContent = cat.strCategory;
        btn.onclick = function () {
          filterByCategory(cat.strCategory);
        };
        categoryRow.appendChild(btn);
      });
    });
}

function filterByCategory(category) {
  statusText.textContent = "Browsing " + category;
  fetch(BASE_URL + "/filter.php?c=" + category)
    .then(res => res.json())
    .then(data => {
      showRecipes(data.meals);
    });
}

function showRecipes(meals) {
  resultsGrid.innerHTML = "";

  for (let i = 0; i < meals.length; i++) {
    let meal = meals[i];

    let col = document.createElement("div");
    col.className = "col-6 col-md-4 col-lg-3";

    col.innerHTML = `
      <div class="card recipe-card" onclick="openRecipe('${meal.idMeal}')">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMeal}">
        <div class="card-body">
          <h6 class="card-title">${meal.strMeal}</h6>
        </div>
      </div>
    `;

    resultsGrid.appendChild(col);
  }
}

function openRecipe(id) {
  modalBody.innerHTML = "Loading...";
  recipeModal.show();

  fetch(BASE_URL + "/lookup.php?i=" + id)
    .then(res => res.json())
    .then(data => {
      let meal = data.meals[0];
      modalTitle.textContent = meal.strMeal;

      // build ingredients list
      let ingredientsHTML = "<ul class='ingredient-list'>";
      for (let i = 1; i <= 20; i++) {
        let ing = meal["strIngredient" + i];
        let measure = meal["strMeasure" + i];
        if (ing && ing.trim() !== "") {
          ingredientsHTML += "<li>" + measure + " " + ing + "</li>";
        }
      }
      ingredientsHTML += "</ul>";

      let ytBtn = "";
      if (meal.strYoutube) {
        ytBtn = `<a href="${meal.strYoutube}" target="_blank" class="btn btn-danger btn-sm mt-2">Watch on YouTube</a>`;
      }

      modalBody.innerHTML = `
        <img src="${meal.strMealThumb}">
        <p><strong>Category:</strong> ${meal.strCategory} | <strong>Area:</strong> ${meal.strArea}</p>
        <h6>Ingredients</h6>
        ${ingredientsHTML}
        <h6>Instructions</h6>
        <p>${meal.strInstructions}</p>
        ${ytBtn}
      `;
    });
}
