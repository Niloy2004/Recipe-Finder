# 🍲 Recipe Finder

A simple and responsive **Recipe Finder Web Application** built using **HTML, CSS, JavaScript, Bootstrap 5, and TheMealDB API**.

Search for recipes, browse categories, discover random recipes, and view complete recipe details including ingredients, measurements, cooking instructions, and YouTube videos.

---

## ✨ Features

* 🔍 **Recipe Search** — Search recipes by name or ingredient
* 🎲 **Random Recipe** — Get a random recipe with one click
* 🍽️ **Recipe Categories** — Browse recipes by different food categories
* 🖼️ **Recipe Cards** — Display recipes with images and names
* 📖 **Recipe Details** — View complete recipe information in a modal
* 🥕 **Ingredients & Measurements** — See the required ingredients and quantities
* 👨‍🍳 **Cooking Instructions** — Read the complete preparation instructions
* ▶️ **YouTube Video** — Watch the recipe video when available
* 📱 **Responsive Design** — Works across different screen sizes
* ⚡ **API Integration** — Fetches real recipe data from TheMealDB

---

## 🛠️ Tech Stack

| Technology        | Usage                            |
| ----------------- | -------------------------------- |
| **HTML5**         | Page structure                   |
| **CSS3**          | Custom styling                   |
| **JavaScript**    | Application logic & API handling |
| **Bootstrap 5**   | Responsive UI & components       |
| **TheMealDB API** | Recipe data                      |

---

## 📂 Project Structure

```text
Recipe-Finder/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🚀 How It Works

### 🔎 Search Recipes

Enter a recipe name such as:

```text
Chicken
Pasta
Beef
Rice
```

The application sends the search request to TheMealDB API and displays the matching recipes.

### 🍽️ Browse Categories

The application loads recipe categories and allows users to browse recipes based on category.

### 🎲 Random Recipe

Click the **Random Recipe** button to instantly load a randomly selected recipe.

### 📖 View Recipe Details

Click any recipe card to open a detailed modal containing:

* Recipe image
* Recipe category
* Recipe area/cuisine
* Ingredients
* Measurements
* Cooking instructions
* YouTube video link (if available)

---

## 🔌 API

This project uses the **TheMealDB API** to retrieve recipe information.

**Base API:**

```text
https://www.themealdb.com/api/json/v1/1
```

The API is used for:

* Recipe search
* Random recipes
* Categories
* Category filtering
* Detailed recipe information

---

## 🎨 UI

The project uses **Bootstrap 5** for the main responsive layout and components, along with custom CSS for recipe cards, images, hover effects, and modal content.

---

## 💻 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/Recipe-Finder.git
```

### 2. Open the Project

```bash
cd Recipe-Finder
```

### 3. Run the Project

Simply open:

```text
index.html
```

in your browser.

No backend or installation is required.

---

## 📸 Project Preview

Add your project screenshot here:

```md
![Recipe Finder Preview](screenshot.png)
```

---

## 📚 What I Learned

While building this project, I practiced:

* Working with JavaScript DOM manipulation
* Handling form submissions
* Using the `fetch()` API
* Working with REST API responses
* Displaying dynamic content
* Creating Bootstrap modals
* Filtering data using API endpoints
* Handling basic API errors
* Using `localStorage`
* Building responsive layouts

---

## 🔮 Future Improvements

Possible improvements for future versions:

* ❤️ Complete favorite recipe functionality
* 💾 Save favorite recipes permanently
* 🔐 User accounts
* 🌙 Dark mode
* 🔎 Advanced recipe filtering
* 📱 Improved mobile UI
* ⭐ Recipe ratings and reviews

---

## 👨‍💻 Author

**Niloy Goswami**

Aspiring Full Stack Developer passionate about building practical web applications and learning modern technologies.

### 🔗 Connect With Me

* GitHub: `https://github.com/Niloy2004`

---

## ⭐ Support

If you like this project, consider giving the repository a ⭐ on GitHub.

---

### 📌 Note

Recipe data is provided by **TheMealDB API**. This project was created for learning and practice purposes.
