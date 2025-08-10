# ✅ Main Branch – Sprint 5 Angular Project

This document describes the **final production version** of the Sprint 5 project from the IT Academy bootcamp.  
It is based on the **responsive landing page** originally developed in Sprint 1 with HTML and CSS, now fully migrated and improved in **Angular** using the **Atomic Design** methodology.  

---

## 🧱 Project Architecture – Atomic Design

The project is structured to ensure **scalability, maintainability, and reusability** using the **Atomic Design** pattern:

```
src/
└── app/
    ├── shared/
    │   ├── atoms/       # Smallest UI elements (e.g., buttons, input fields)
    │   ├── molecules/   # Combinations of atoms (e.g., newsletter form, question item)
    │   ├── organisms/   # Complex sections composed of molecules and atoms (e.g., navbar, hero, features)
    └── app.component.ts # Root component integrating all organisms
```

**Key points:**
- Each component has its **own HTML, CSS, and TypeScript** file.
- Styles are **scoped and modularized** to prevent global conflicts.
- Standalone components are used to avoid unnecessary Angular modules.

---

## ⚙️ Technologies Used

- **Angular 20.1.1** with Standalone Components  
- HTML5 & CSS3 (modularized per component)  
- `FormsModule` for `ngModel` and `blur` event validation  
- **Atomic Design** methodology for UI architecture  
- Git & GitHub for version control and collaborative workflow  

---

## 🚀 Improvements Over Sprint 1

The migration to Angular has brought **significant enhancements** compared to the original HTML/CSS implementation:

### 1️⃣ Navbar
- Fully responsive with **hamburger menu toggle**.
- Menu closes automatically on:
  - Outside click
  - Scroll event
  - Escape key press
- Refined toggle animation and alignment.

### 2️⃣ Features Section
- Now **dynamic**: content switches between tabs without reloading the page.
- Centralized tab logic inside the component for maintainability.

### 3️⃣ Questions Section
- Implemented as an **accordion**.
- Users can expand/collapse answers interactively.

### 4️⃣ Newsletter Section
- Added **email validation on `blur` event**, providing instant feedback.
- Built using reusable atoms (e.g., `app-input-field`) and molecules.

### 5️⃣ UI & Design
- **Updated color palette** for better contrast and modern look.
- Minor layout adjustments (spacing, padding, alignment).
- Buttons, icons, and menu elements refined for better usability.

### 6️⃣ Component Reuse
- Atoms like `app-button` and `app-input-field` are reused across multiple sections, ensuring visual and behavioral consistency.

---

## 🧪 Testing Overview

The project includes **unit tests** for atoms, molecules, and organisms, ensuring that both **individual components** and their **integration** work correctly.

### ✅ What We Test
- **Rendering:** Components display correct labels, text, and attributes.
- **Events & Interaction:**  
  - Navbar hamburger menu toggles state correctly.  
  - `blur` validation in Newsletter triggers and works as expected.  
  - Accordion in Questions expands/collapses properly.
- **Component Composition:**  
  - Organisms include the right child components (e.g., Navbar contains `app-button`).

### 🛠 Tools & Frameworks
- **Jasmine + Karma** for running unit tests.
- `TestBed` for creating isolated testing environments.
- `By` from `@angular/platform-browser` to query DOM elements.
- `DebugElement` for inspecting and interacting with components.

### 📌 How to Run the Tests
```bash
ng test
```
This will:
- Compile the project in testing mode.
- Open the Karma test runner in the browser.
- Show a live report of all passing/failing tests.

---

## 📂 Workflow & Branching Strategy

The team follows a **feature-branch workflow**:

- `main` → Stable, production-ready version.  
- `develop` → Integration branch for all completed features before release.  
- `feature/...` → One branch per component/feature, e.g.:
  - `features/navbar`
  - `features/hero`
  - `features/features`
  - `features/extension`
  - `features/questions`
  - `features/newsletter`
  - `features/footer`
  - `features/testing`

**Workflow Example:**
1. Create `feature/component-name` from `develop`.  
2. Implement the feature and commit changes.  
3. Open a Pull Request (PR) to `develop`.  
4. Test and review the merged code in `develop`.  
5. Merge `develop` into `main` for the final release.

---

## 🧠 Best Practices Applied
- Standalone components with scoped imports.
- Clear separation of concerns:
  - **Atoms** = smallest elements
  - **Molecules** = combinations of atoms
  - **Organisms** = complete sections
- Consistent naming and folder structure.
- Type-safe code with Angular & TypeScript.
- Reusable components to avoid code duplication.

---

## 📅 Last Updated
**August 2025**
