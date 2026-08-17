// ============================================================
// home.js — logic specific to index.html (Home / hero page)
// ============================================================
const heroSearchForm = document.getElementById("heroSearchForm");
const heroSearchInput = document.getElementById("heroSearchInput");
const homeResultsGrid = document.getElementById("homeResultsGrid");
const homeStatus = document.getElementById("homeStatus");
const homeCategoryRow = document.getElementById("homeCategoryRow");
const randomBtn = document.getElementById("randomBtn");
const resultsHeading = document.getElementById("resultsHeading");

// ---- initial load ----
loadHomeCategories();
searchHome("chicken");

// ---- search ----
heroSearchForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let term = heroSearchInput.value.trim();
  if (term === "") return;
  searchHome(term);
});

function searchHome(query) {
  resultsHeading.textContent = "Results for \"" + query + "\"";
  homeStatus.textContent = "Searching...";
  showSkeleton(homeResultsGrid, 8);

  fetch(BASE_URL + "/search.php?s=" + encodeURIComponent(query))
    .then(res => res.json())
    .then(data => {
      if (!data.meals) {
        homeResultsGrid.innerHTML = "";
        homeStatus.textContent = "No recipes found for \"" + query + "\"";
        return;
      }
      homeStatus.textContent = data.meals.length + " results found";
      renderRecipeCards(homeResultsGrid, data.meals);
    })
    .catch(err => {
      homeStatus.textContent = "Something went wrong, try again";
      homeResultsGrid.innerHTML = "";
      console.log(err);
    });
}

// ---- random recipe ----
randomBtn.addEventListener("click", function () {
  resultsHeading.textContent = "Your random pick";
  showSkeleton(homeResultsGrid, 4);
  fetch(BASE_URL + "/random.php")
    .then(res => res.json())
    .then(data => {
      renderRecipeCards(homeResultsGrid, data.meals);
      homeStatus.textContent = "Here's a random one for you";
    })
    .catch(err => {
      homeStatus.textContent = "Something went wrong, try again";
      homeResultsGrid.innerHTML = "";
      console.log(err);
    });
});

// ---- category quick strip ----
function loadHomeCategories() {
  fetch(BASE_URL + "/list.php?c=list")
    .then(res => res.json())
    .then(data => {
      let categories = data.meals.slice(0, 8);
      categories.forEach((cat, i) => {
        let btn = document.createElement("button");
        btn.className = "btn btn-sm btn-outline-dark cat-btn";
        btn.style.setProperty("--i", i);
        btn.textContent = cat.strCategory;
        btn.onclick = function () {
          document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
          resultsHeading.textContent = cat.strCategory + " recipes";
          homeStatus.textContent = "Browsing " + cat.strCategory;
          showSkeleton(homeResultsGrid, 8);
          fetch(BASE_URL + "/filter.php?c=" + encodeURIComponent(cat.strCategory))
            .then(res => res.json())
            .then(data => {
              if (!data.meals) {
                homeResultsGrid.innerHTML = "";
                homeStatus.textContent = "No recipes found";
                return;
              }
              renderRecipeCards(homeResultsGrid, data.meals);
            })
            .catch(err => {
              homeStatus.textContent = "Something went wrong, try again";
              console.log(err);
            });
        };
        homeCategoryRow.appendChild(btn);
      });
    })
    .catch(err => console.log(err));
}