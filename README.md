# 🧱 Dev Stack Builder

A React app where you can browse a catalog of web development technologies — frontend, backend,
databases, languages, styling, DevOps, and tools — and build your own personal "stack" by adding
the ones you use or want to learn.

## 🛠 Technology Used

- React (Vite)
- Tailwind CSS
- JavaScript (ES6+)
- React-Toastify
- JSON for the technology data

## ✨ Features

1. **Interactive stack builder** — click "Add to Stack" on any technology card and it instantly
   appears in the "Your Stack" sidebar, with duplicate adds blocked and flagged with a toast.
2. **JSON-driven catalog** — all 12 technologies come from a standalone JSON file (with a brief
   loading state) instead of being hardcoded into the components.
3. **Fully responsive layout** — the navbar, hero, technology grid, and stack sidebar all adapt
   cleanly from mobile to tablet to desktop.

## 🚀 Getting Started

```bash
npm install
npm run dev
```

---

## ❓ React Questions

**1. What is JSX, and why is it used in React?**
JSX is a syntax extension that lets you write HTML-like markup directly inside JavaScript. It's
used in React because it makes describing what the UI should look like much easier to read and
write than calling `React.createElement()` by hand — it gets compiled into regular JavaScript
under the hood.

**2. What is the difference between props and state?**
Props are data passed into a component from its parent — they're read-only from the component's
own perspective. State is data a component manages internally with `useState`, and it can change
over time in response to user actions, which causes the component to re-render.

**3. What does the `useState` hook do, and where did you use it in this project?**
`useState` lets a component keep and update its own value between renders. I used it in `App.jsx`
to store the list of technologies, whether the data is still loading, and the array of technologies
the user has added to their stack. I also used it in `Navbar.jsx` to track whether the mobile menu
is open.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` lets you run code in response to a component rendering — usually for things outside of
React itself, like data loading. I used it in `App.jsx` with an empty dependency array so it runs
once when the app first mounts: it starts a short `setTimeout` to simulate a loading state, then
loads the imported `technologies.json` data into state once the timer fires.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
The `key` tells React which item is which across re-renders, so it can figure out what changed,
was added, or was removed without having to re-render the entire list. Without a stable, unique
key, React can mix up items or re-render more than it needs to.

**6. What is conditional rendering? Show one place you used it (example: the empty stack message).**
Conditional rendering means showing different UI depending on some condition. I used it in
`Stack.jsx`: if the stack array is empty, it shows a placeholder message ("Your stack is empty");
otherwise it renders the list of added technologies and the "Remove All" button.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
A parent passes data down to a child as props, e.g. `<TechCard tech={tech} />`. To send something
back up, the parent passes a function down as a prop (e.g. `onAdd={handleAdd}`), and the child
calls that function — passing along whatever data it needs to — whenever the relevant event
happens, like a button click.

## 📤 Submission

- GitHub Repository Link: https://github.com/ahabib69/B14-A05-DevStack
- Live Site Link: https://friendly-blini-5a7328.netlify.app