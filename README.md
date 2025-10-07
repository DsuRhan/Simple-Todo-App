# Simple Todo App

A lightweight, responsive Todo application built with **React**, **TypeScript**, and **Tailwind CSS** (via Vite).  
Features include dark/light theme toggle, priority levels, deadlines, and smooth animations.

---

## 🧰 Features

- Add new todos with text, optional deadline, and priority (**low**, **medium**, **high**)
- Mark todos as completed or uncompleted
- Delete todos with a fade-out animation
- Filter todos by **All**, **Active**, or **Completed**
- Toggle between **dark mode** and **light mode**
- Warm color tones for light mode
- Responsive layout (mobile & desktop friendly)
- Persistent storage using **localStorage**

---

## 📁 Project Structure

<pre>
src/
├── components/
│ ├── TodoForm.tsx
│ ├── TodoList.tsx
│ ├── TodoItem.tsx
│ ├── TodoFilter.tsx
│ └── ThemeToggle.tsx
├── types.ts
├── App.tsx
├── index.tsx
└── index.css
</pre>


**Explanation:**
- **components/** → UI logic for form, list, items, filter, and theme toggle
- **types.ts** → Shared TypeScript type definitions
- **App.tsx** → Root component managing global state and theme
- **index.css** → Tailwind base styles and resets

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+ recommended)
- npm or yarn

### Installation

```bash
git clone https://github.com/DsuRhan/Simple-Todo-App.git
cd Simple-Todo-App
npm install

```

---

## 🎨 Styling & Theme Logic

Styling is handled with Tailwind CSS utility classes.

Dark/light mode is controlled using a React useState hook (dark) and toggling a CSS class on <html>.

Components receive the dark state via props or global state to update colors dynamically.

Transitions and animations use Tailwind’s built-in utilities for smooth fade and scale effects.

---

## ✔️ Current Features & To-Do

# ✅ Completed

Core CRUD functionality (add, toggle, delete)

Dark/light theme toggle

Priority & deadline input

Animated transitions

Filter system (All / Active / Completed)

Responsive layout

# ⚠️ Potential Improvements

Edit existing todos

Sort by deadline or priority

Add delete confirmation

Save selected theme preference

Accessibility improvements (keyboard & ARIA)

Add testing (unit / integration)

---

## 📜 Example Usage

Add a new task with a title, deadline, and priority.

Mark it as completed by clicking the checkbox.

Delete it — it fades out smoothly.

Toggle the app’s theme between dark and light using the top-right button.

Use filters to view only active or completed tasks.

##🛠️ Tech Stack

React (Hooks & Function Components)

TypeScript

Tailwind CSS (via Vite)

Vite (development and build tool)

---

## 👤 Author

DsuRhan
Created for learning and demonstration purposes.
Feel free to fork, modify, or contribute to improve the app.

-“A simple app built efficiently — just enough to keep you productive.”