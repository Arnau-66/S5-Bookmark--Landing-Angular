# 🚀 Angular Landing Page - Sprint 5

This project is a complete **landing page** built using **Angular** and structured with the principles of **Atomic Design**. It replicates a professional layout composed of different sections (hero, features, FAQ, newsletter, etc.), implemented as modular and reusable Angular components.

---

## 🧱 Project Structure

The app follows the [Atomic Design methodology](https://bradfrost.com/blog/post/atomic-web-design/) with the following hierarchy:

```
src/
└── app/
    └── shared/
        ├── atoms/         # Smallest UI elements (button, input)
        ├── molecules/     # Groups of atoms (form, title+text blocks)
        ├── organisms/     # Full sections (navbar, hero, features, etc.)
```

---

## 🧩 Components Overview

### Atoms
- `Button`: reusable CTA button with styling variants.
- `InputField`: custom input with built-in blur validation and error messages.
- `TabButton`: custom tab switcher button with active logic.

### Molecules
- `FeaturesTitle`: a block with a title and subtitle.
- `NewsletterForm`: includes `InputField` and `Button`, with email validation.

### Organisms
- `Navbar`: responsive top navigation bar.
- `Hero`: headline and main CTA.
- `Features`: tab-based feature content with dynamic panels.
- `Extension`: download cards for Chrome, Firefox, and Opera.
- `Questions`: FAQ with collapsible answers and icon animation.
- `Newsletter`: subscription form with validation.
- `Footer`: brand, links, and social media icons.

---

## 🎨 Styling

- All components are styled using standard CSS.
- Media queries ensure **responsive design** for screen sizes ≤ 900px.
- Styles are divided by component (`.css` files next to `.ts`/`.html`).

---

## 📦 Technologies Used

- **Angular Standalone Components** (Angular 17+)
- **FormsModule** (for input validation)
- **TypeScript** (strictly typed)
- **HTML/CSS** (fully responsive)

---

## 🛠️ How to Run

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/angular-landing-page.git
   cd angular-landing-page
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   ng serve
   ```

4. Open your browser at:
   ```
   http://localhost:4200
   ```

---

## ✅ Features

- 🌐 Fully modular Angular app
- 🔁 Reusable components with inputs and logic
- 🧪 Input validation on blur
- 📱 Fully responsive
- ♻️ Atomic Design structure
- 🔥 Hover effects and button variants

---

## 📌 Notes

- This project is part of **Sprint 5** of the **IT Academy Bootcamp**.
- Developed with a focus on **clean architecture**, **reusability**, and **UI best practices**.

---

## 🧠 Author

**Arnau Pérez**  
