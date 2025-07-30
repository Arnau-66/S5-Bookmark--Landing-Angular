# 🚧 Develop Branch – Sprint 5 Angular Project

This document describes the active development state of the **Sprint 5** project from the IT Academy bootcamp. It is based on a previously designed responsive landing page using HTML and CSS (Sprint 1), now migrated to Angular using the **Atomic Design** approach.

---

## 🧱 Project Architecture

The project is divided into reusable components following the **Atomic Design** pattern:

```
src/
└── app/
    ├── shared/
    │   ├── atoms/
    │   ├── molecules/
    │   ├── organisms/
    └── app.component.ts
```

CSS styles are also organized per component.

---

## ⚙️ Technologies Used

- Angular 17+ with Standalone Components
- HTML5 and CSS3 (modularized)
- FormsModule for `ngModel` validation
- **Atomic Design** pattern
- Git and GitHub for version control

---

## 🔧 Features in Development

- ✅ Responsive navbar with working hamburger menu
- ✅ Hero section with introductory message
- ✅ Features section with dynamic tabs
- ✅ Extension section with reusable cards
- ✅ FAQ section with collapsible items (accordion)
- ✅ Newsletter form with `blur` email validation
- ✅ Footer with links and social media
- ⚠️ Pending: Testing

---

## 📂 Active Branches

- `main`: stable and final compiled version
- `develop`: current development branch
- `feature/...`: feature-specific branches per component or section

---

## 🧪 Current Status

The Angular application is fully functional, with all sections migrated from static HTML/CSS. All components are organized and decoupled, ready for unit testing or future service integration.

---

## 🧠 Best Practices Applied

- All components use `standalone: true`
- Specific imports per component (`@Component.imports`)
- CSS modularized per component
- Atom reuse (`app-button`, `app-input-field`)
- Typed and clean code organization

---

## 🔗 Project Link (optional)

> _Include a GitHub Pages, Vercel or Netlify link if deployed._

---

## 📅 Last Updated

**July 2025**
