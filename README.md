# 🚀 Develop Branch – Sprint 5 Angular Project

This document describes the **current development** state of the Sprint 5 project from the IT Academy bootcamp. It is based on the **responsive landing page** designed in Sprint 1 with HTML and CSS, now fully migrated to Angular using the **Atomic Design** approach.

---

## 🧱 Project Architecture – Atomic Design

The project structure follows the **Atomic Design** principles, ensuring scalability and reusability:

src/
└── app/
├── shared/
│ ├── atoms/ # Smallest UI elements (buttons, input fields, etc.)
│ ├── molecules/ # Combinations of atoms (newsletter form, question item, etc.)
│ ├── organisms/ # Complex sections (navbar, hero, features, etc.)
└── app.component.ts # Root component

Each component has its own HTML, CSS, and logic (TypeScript), and styles are **modularized** to avoid global conflicts.

---

## ⚙️ Technologies Used

- Angular 20.1.1 with Standalone Components
- HTML5 and CSS3 (modularized per component)
- FormsModule for `ngModel` and blur validation
- **Atomic Design** methodology
- Git and GitHub for version control

---

## 🔧 New Features Added in Angular Migration

Compared to Sprint 1, the Angular version includes several enhancements:

- **Navbar**: Responsive with working hamburger menu toggle.
- **Features Section**: Now dynamic, with tabbed content switching.
- **Questions Section**: Accordion functionality to expand/collapse answers.
- **Newsletter Section**: Email validation triggered on `blur` event.
- **UI Improvements**: Updated color palette and minor design adjustments (e.g., refined toggle menu animation).
- **Component Reuse**: Atoms like `app-button` and `app-input-field` used across multiple sections.

---

## 🧪 Testing

Unit tests have been implemented for atoms, molecules, and organisms to ensure:

- Components render with correct content and structure.
- Event handlers (e.g., menu toggle, blur validation) work as expected.
- Component integration within organisms (e.g., Navbar includes `app-button`) functions correctly.

Testing is done with **Jasmine + Karma**, focusing on behavior and component interaction.

---

## 📂 Workflow and Branching Strategy

The project uses a **Git feature-branch workflow**:

- `main`: Stable and production-ready version.
- `develop`: Integration branch for completed features.
- `feature/...`: Individual branches for specific components or functionalities.

Example feature branches in this sprint:
- `features/navbar`
- `features/hero`
- `features/features`
- `features/extension`
- `features/questions`
- `features/newsletter`
- `features/footer`
- `features/testing`

---

## 🧠 Best Practices Applied

- Standalone components with scoped imports.
- Clear separation of concerns (atoms, molecules, organisms).
- Consistent naming and folder structure.
- Modular CSS per component.
- Type-safe code using Angular and TypeScript features.

---

## 📅 Last Updated

**August 2025**