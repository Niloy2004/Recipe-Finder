// ============================================================
// categories.js — logic specific to categories.html
// ============================================================
const allCategoriesGrid = document.getElementById("allCategoriesGrid");
const categoryResultsSection = document.getElementById("categoryResultsSection");
const categoryResultsGrid = document.getElementById("categoryResultsGrid");
const categoryResultsHeading = document.getElementById("categoryResultsHeading");
const categoryStatus = document.getElementById("categoryStatus");

loadAllCategories();

function loadAllCategories() {
  allCategoriesGrid.innerHTML = `
    <div class="col-6 col-md-4 col-lg-3"><div class="skeleton-card"><div class="skeleton-img"></div></div></div>
    <div class="col-6 col-md-4 col-lg-3"><div class="skeleton-card"><div class="skeleton-img"></div></div></div>
    <div class="col-6 col-md-4 col-lg-3"><div class="skeleton-card"><div class="skeleton-img"></div></div></div>
    <div class="col-6 col-md-4 col-lg-3"><div class="skeleton-card"><div class="skeleton-img"></div></div></div>
  `;

  fetch(BASE_URL + "/categories.php")
    .then(res => res.json())
    .then(data => {
      allCategoriesGrid.innerHTML = "";
      data.categories.forEach((cat, i) => {
        let col = document.createElement("div");
        col.className = "col-6 col-md-4 col-lg-3";
        col.innerHTML = `
          <div class="category-card" style="--i:${i}" data-cat="${cat.strCategory}">
            <img src="${cat.strCategoryThumb}" alt="${cat.strCategory}">
            <div class="category-overlay"><span>${cat.strCategory}</span></div>
          </div>
        `;
        col.querySelector(".category-card").addEventListener("click", function () {
          document.querySelectorAll(".category-card").forEach(c => c.classList.remove("active"));
          this.classList.add("active");
          browseCategory(cat.strCategory);
        });
        allCategoriesGrid.appendChild(col);
      });
    })
    .catch(err => {
      allCategoriesGrid.innerHTML = "<p class='text-danger'>Could not load categories. Please try again.</p>";
      console.log(err);
    });
}

function browseCategory(category) {
  categoryResultsSection.style.display = "block";
  categoryResultsHeading.textContent = category + " recipes";
  categoryStatus.textContent = "Loading...";
  showSkeleton(categoryResultsGrid, 8);

  categoryResultsSection.scrollIntoView({ behavior: "smooth", block: "start" });

  fetch(BASE_URL + "/filter.php?c=" + encodeURIComponent(category))
    .then(res => res.json())
    .then(data => {
      if (!data.meals) {
        categoryResultsGrid.innerHTML = "";
        categoryStatus.textContent = "No recipes found in " + category;
        return;
      }
      categoryStatus.textContent = data.meals.length + " recipes in " + category;
      renderRecipeCards(categoryResultsGrid, data.meals);
    })
    .catch(err => {
      categoryStatus.textContent = "Something went wrong, try again";
      categoryResultsGrid.innerHTML = "";
      console.log(err);
    });
}