# DevNotes 📝

> Your modern notes app for developers – simple, responsive, and accessible!  
> ⚠️ **Work in progress**

---

## 🚀 Overview

DevNotes is a progressive web application built with **Next.js 16+**, **React 19**, **TypeScript**, and **Tailwind CSS**.  
The app is designed to help developers and tech enthusiasts keep their notes organized in a clean, modern interface.

Key goals of this project:

- Server & Client Components architecture ✅
- Fully typed with TypeScript ✅
- Responsive layout with Tailwind CSS ✅
- Accessible components (`aria-*`, focus states, keyboard navigation) ✅
- Progressive enhancement: toggle content, reusable UI components  
- Easy future integration with **ShadCN UI**, **CVA**, and state management libraries

---

## 📝 Features (Planned / In Progress)

- Create, read, and manage notes  
- Toggle visibility of note content with accessible buttons  
- Responsive grid layout with equal-height cards  
- Dark mode support  
- Reusable components: Button, Card, NoteItem  
- Future enhancements:
  - Form Actions for creating notes
  - Favorite / pin notes
  - Advanced state management (useReducer → context → Zustand/Redux Toolkit)
  - Unit & E2E testing integration

---

## 🎨 UI & Accessibility

- Clean and minimal design for readability  
- Tailwind CSS with custom palette:
  - Light background: `bg-zinc-50`
  - Dark background: `bg-black`
  - Accent: `text-violet-600` / `hover:text-violet-500`
- Cards with consistent heights and shadows  
- Accessible buttons (`aria-expanded`, `aria-controls`)  
- Keyboard navigable, focusable interactive elements  

---

## 🛠️ Tech Stack

- **Next.js 16+** (App Router)  
- **React 19** (Server & Client Components)  
- **TypeScript**  
- **Tailwind CSS + clsx + tailwind-merge + CVA**  
- **ShadCN UI** (future components)  
- **Vitest + Testing Library** (unit tests, planned)  
- **Playwright** (E2E, planned)  

---

## 📂 Project Structure (Work in Progress)
