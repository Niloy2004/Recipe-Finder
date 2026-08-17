# 🍲 Recipe Finder

A modern, responsive and interactive **Recipe Finder Web Application** that helps users discover recipes from around the world. Users can search for recipes, explore categories, view complete recipe details, save their favorite recipes, get random recipe suggestions, and switch between light and dark mode.

Built using **HTML5, CSS3, JavaScript, Bootstrap 5, and TheMealDB API**.

---

## 🌐 Live Demo

🚀 **Live Website:**  Soon

📦 **GitHub Repository:** `https://github.com/Niloy2004`

---

## ✨ Features

### 🔍 Recipe Search

Search for recipes by entering a dish or ingredient such as:

* Chicken
* Pasta
* Pizza
* Cake
* Rice
* Beef

The application fetches live recipe data from **TheMealDB API**.

---

### 🎲 Surprise Me

Not sure what to cook?

Click the **"Surprise Me"** button to randomly fetch a recipe and discover something new.

---

### 🍽️ Browse Categories

Explore recipes through different food categories.

Examples include:

* Beef
* Chicken
* Dessert
* Lamb
* Pasta
* Seafood
* Vegetarian
* Breakfast
* Miscellaneous

Clicking a category loads the recipes belonging to that category.

---

### ❤️ Favorites

Users can save recipes to their personal favorites list.

Favorites are stored using:

```text
localStorage
```

This means saved recipes remain available even after refreshing or reopening the browser.

Users can:

* ❤️ Add recipes
* 💔 Remove recipes
* 📋 View saved recipes
* 🔄 Automatically update the favorites page

---

### 📖 Recipe Details

Clicking a recipe opens a detailed modal containing:

* Recipe name
* Recipe image
* Category
* Cuisine / Area
* Ingredients
* Measurements
* Cooking instructions
* YouTube cooking video link

---

### 🌙 Dark Mode

The application includes a built-in dark mode.

The selected theme is stored in `localStorage`, so the user's preference persists across pages.

---

### ⚡ Skeleton Loading

While API data is being loaded, animated skeleton cards are displayed instead of leaving the page blank.

This provides a smoother user experience and makes the application feel more responsive.

---

### 🔔 Toast Notifications

The application displays toast notifications when users perform actions such as:

```text
Added to favorites
Removed from favorites
```

---

### 📱 Responsive Design

The application is designed to work across:

* 📱 Mobile
* 📲 Tablet
* 💻 Laptop
* 🖥️ Desktop

Bootstrap's responsive grid system is combined with custom CSS for a better UI.

---

### 📩 Contact Form

The Contact page allows users to enter:

* Name
* Email
* Message

Since this is a frontend-only application, the form uses a `mailto:` link to open the user's default email application with the message pre-filled.

---

## 🛠️ Tech Stack

| Technology    | Purpose                       |
| ------------- | ----------------------------- |
| HTML5         | Page structure                |
| CSS3          | Custom styling and animations |
| JavaScript    | Application logic             |
| Bootstrap 5   | Responsive UI and components  |
| TheMealDB API | Recipe data                   |
| LocalStorage  | Favorites & theme persistence |
| Fetch API     | API requests                  |

---

## 🔌 API

This project uses the **TheMealDB API** to retrieve recipe information.

### Base API

```text
https://www.themealdb.com/api/json/v1/1
```

### API Operations Used

#### Search Recipe

```text
/search.php?s=chicken
```

#### Random Recipe

```text
/random.php
```

#### Get Categories

```text
/list.php?c=list
```

#### Get All Categories

```text
/categories.php
```

#### Filter By Category

```text
/filter.php?c=Chicken
```

#### Get Recipe Details

```text
/lookup.php?i=52772
```

---

## 📂 Project Structure

```text
RECIPIE/
│
├── index.html
├── categories.html
├── favorites.html
├── about.html
├── contact.html
│
├── home.js
├── categories.js
├── favorites.js
├── contact.js
├── common.js
│
├── style.css
│
└── README.md
```

---

## 📄 Pages

### 🏠 Home — `index.html`

The main landing page of the application.

Includes:

* Hero section
* Recipe search
* Surprise Me button
* Quick categories
* Recipe results
* Recipe detail modal

---

### 🍽️ Categories — `categories.html`

Displays available recipe categories fetched from TheMealDB.

Users can select a category and view recipes from that category.

---

### ❤️ Favorites — `favorites.html`

Displays all recipes saved by the user.

Favorites are retrieved from browser `localStorage`.

If no favorites exist, an empty-state message is displayed.

---

### ℹ️ About — `about.html`

Provides information about the project, its features, technologies, and author.

---

### 📩 Contact — `contact.html`

Provides a simple contact form for sending feedback, questions, or bug reports.

---

## 🧠 JavaScript Architecture

The JavaScript code is divided into multiple files to keep the project organized.

### `common.js`

Contains functionality shared across multiple pages.

Responsibilities include:

* API base URL
* Dark mode
* Active navigation
* Toast notifications
* Favorites management
* Skeleton loading
* Recipe cards
* Recipe detail modal

---

### `home.js`

Handles functionality specific to the Home page.

Responsibilities:

* Recipe searching
* Random recipe
* Quick categories
* Initial recipe loading
* Search result rendering

---

### `categories.js`

Handles:

* Category API requests
* Category cards
* Category selection
* Category recipe filtering

---

### `favorites.js`

Handles:

* Loading saved favorites
* Rendering favorite recipes
* Empty favorites state
* Updating favorites dynamically

---

### `contact.js`

Handles:

* Contact form validation
* Reading form values
* Creating a `mailto:` URL
* Opening the user's email client

---

## 💾 LocalStorage

The application uses browser LocalStorage for client-side persistence.

### Favorites

```javascript
localStorage.getItem("favorites")
```

Saved recipes are stored as a JSON array.

Example:

```javascript
[
  {
    "idMeal": "52772",
    "strMeal": "Teriyaki Chicken Casserole"
  }
]
```

### Dark Mode

The theme preference is stored as:

```text
darkMode = on
```

or

```text
darkMode = off
```

---

## 🎨 UI & UX

The interface focuses on keeping the application simple and easy to use.

### UI Features

* Modern hero section
* Responsive recipe cards
* Hover animations
* Favorite heart animation
* Smooth scrolling
* Skeleton loading
* Toast notifications
* Modal recipe details
* Dark mode
* Responsive Bootstrap navigation
* Empty-state designs

---

## ⚡ Animations

Custom CSS animations are used throughout the application.

Examples include:

* Page fade-in
* Navbar animation
* Button hover effects
* Recipe card animations
* Favorite heart pop animation
* Category animations
* Dark mode transitions

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Niloy2004/recipe-finder.git
```

### 2. Open the Project

```bash
cd recipe-finder
```

### 3. Run the Project

Because this is a frontend project, no backend installation is required.

You can simply open:

```text
index.html
```

in your browser.

### Recommended

For a better development experience, use **VS Code + Live Server**.

---

## 🖥️ Running with VS Code

1. Open the project in VS Code.
2. Install the **Live Server** extension.
3. Right-click `index.html`.
4. Select **Open with Live Server**.
5. The application will open in your browser.

---

## 🔄 Application Flow

```text
                    ┌──────────────────┐
                    │     Home Page    │
                    └────────┬─────────┘
                             │
              ┌──────────────┼──────────────┐
              │              │              │
              ▼              ▼              ▼
         Search Recipe   Random Recipe   Categories
              │              │              │
              └──────────────┼──────────────┘
                             ▼
                     ┌───────────────┐
                     │ Recipe Cards  │
                     └───────┬───────┘
                             │
                    ┌────────┴────────┐
                    │                 │
                    ▼                 ▼
              Recipe Details      Favorite ❤️
                    │                 │
                    ▼                 ▼
                 Modal          LocalStorage
                                      │
                                      ▼
                              Favorites Page
```

---

## 🧩 Main Components

```text
Recipe Finder
│
├── Navigation
│   ├── Home
│   ├── Categories
│   ├── Favorites
│   ├── About
│   └── Contact
│
├── Home
│   ├── Search
│   ├── Random Recipe
│   ├── Quick Categories
│   └── Recipe Grid
│
├── Categories
│   ├── Category Cards
│   └── Category Recipes
│
├── Recipe Details
│   ├── Image
│   ├── Ingredients
│   ├── Measurements
│   ├── Instructions
│   └── YouTube Video
│
├── Favorites
│   └── Saved Recipes
│
├── Theme
│   └── Dark Mode
│
└── Contact
    └── Mailto Form
```

---

## 🔐 Data & Privacy

This project does not use a custom backend or database.

Recipe data is retrieved from the public TheMealDB API.

Favorites and theme preferences are stored locally in the user's browser using `localStorage`.

No user account or authentication system is required.

---

## ⚠️ Current Limitations

Because this is a frontend-only project:

* No user authentication
* No cloud-based favorites
* No custom backend
* Contact form depends on the user's email client
* Favorites are browser-specific
* Favorites can be lost if browser storage is cleared
* Recipe availability depends on the external API

---

## 🔮 Future Improvements

Possible upgrades for future versions:

* [ ] User authentication
* [ ] Cloud-synced favorites
* [ ] Firebase / Supabase backend
* [ ] Advanced recipe filters
* [ ] Search by ingredient
* [ ] Search by cuisine
* [ ] Search by dietary preference
* [ ] Recipe sharing
* [ ] Printable recipes
* [ ] Shopping list generation
* [ ] Cooking timer
* [ ] Meal planner
* [ ] Pagination
* [ ] Better API error handling
* [ ] Progressive Web App support
* [ ] Offline support
* [ ] Accessibility improvements

---

## 📸 Screenshots

Add screenshots of the project here.

Example:

```text
screenshots/
├── home.png
├── categories.png
├── recipe-details.png
├── favorites.png
├── dark-mode.png
└── contact.png
```

Then add them to the README:

```markdown
![Home Page](screenshots/home.png)
```

---

## 👨‍💻 Author

### Niloy Goswami

Aspiring Full Stack Developer passionate about building practical web applications and learning modern web technologies.

🔗 **GitHub:** `https://github.com/Niloy2004`

---

## 📚 Learning Goals

This project was created as a practical project to improve understanding of:

* HTML5
* CSS3
* JavaScript
* DOM Manipulation
* Fetch API
* REST APIs
* JSON
* LocalStorage
* Bootstrap
* Responsive Web Design
* UI/UX
* Async JavaScript
* Error Handling
* Frontend Project Structure

---

## 🙏 Credits

### TheMealDB

Recipe information and images are provided through the **TheMealDB API**.

Special thanks to TheMealDB for providing accessible recipe data for learning and development projects.

---

## ⭐ Support

If you found this project useful or interesting, consider giving the repository a ⭐ on GitHub.

It really helps and motivates further development!

---

## 📜 License

This project is created for **learning, practice, and educational purposes**.

Recipe data is provided by TheMealDB API and is subject to its respective terms and usage policies.

---

## 🍲 Final Note

Recipe Finder is a simple example of how a frontend application can consume a real-world API and turn the returned data into a useful and interactive user experience.

The project demonstrates a complete frontend flow:

```text
API
 ↓
Fetch Data
 ↓
JavaScript Processing
 ↓
Dynamic DOM Rendering
 ↓
Interactive UI
 ↓
LocalStorage
 ↓
User Experience
```

Built with ❤️ and JavaScript.

**Happy Cooking! 🍳🔥**
