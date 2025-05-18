# React Form with Tailwind, TypeScript, and useReducer

This repository contains a self-educational project exploring the implementation of a form in **React** using **TypeScript**, **Tailwind CSS**, and the `useReducer` hook for state management. The goal is to deepen understanding of state handling in React using `useReducer` as an alternative to `useState`, as well as to experiment with modern frontend development practices and styling using Tailwind CSS.

## 📚 Purpose

The primary purpose of this project is educational. Specifically, it serves as a sandbox to:

- Learn and practice using the `useReducer` hook to manage form state in React.
- Integrate TypeScript for type safety and code clarity.
- Apply utility-first CSS design via Tailwind CSS.
- Understand the architecture and structure of scalable, typed React components.

This project is not intended for production use.

## 🛠️ Technologies Used

- [React](https://reactjs.org/) (via Vite)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/) (for fast development server and bundling)

## Notes:

**In React, the value attribute in select elements serves several important purposes that are different from traditional HTML forms:**

- Controlled Components: In React, form elements like `<select>` are typically used as "controlled components" where React manages the state of the form element. The value attribute is used to specify which option is currently selected, binding it directly to React state.

- Single Source of Truth: React follows a pattern where your component state becomes the "single source of truth" for form data. The value attribute connects the select element to this state.

- Programmatic Control: Having the value attribute allows you to programmatically control which option is selected based on your application logic or user interactions elsewhere in your app.

- Form Submissions: When handling form submissions in React, the value attribute makes it easy to access the currently selected option through your state, rather than having to query the DOM.

- Dynamic Updates: You can dynamically update which option is selected in response to other user interactions or data changes.

```js
<select id="category" value={activity.category} onChange={handleChange}>
```
