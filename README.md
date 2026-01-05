# Basic React Demo

Hi my name is canute and this is my basic react demo for my internship at cse connect

<!-- This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh -->

# Components — Reusable React UI Library (WIP)

A work-in-progress library of reusable React components and UI primitives. This repository contains component implementations, SASS styles, and small helper hooks intended to be composed into applications or extracted into a shared component package.

## Purpose

- Provide modular, reusable UI and entity components (Cards, Forms, Modals, Tables, Actions, etc.)
- Include small hooks and API helpers for integration (useAuth, useLoad, API client)
- Serve as a living component library for use in other projects or as a base for a component package

## Highlights

- Reusable UI primitives: Card, Form, Modal, Actions, Icons
- Entity components: Project, LogTable, ContributionRow/Form, GroupCard, ModuleCard, AssessmentCard
- Layout components: Header, Navbar, Footer, Layout
- Hooks & API helpers: useAuth, useLoad, API client + apiURL template
- SASS-based styling with variables, mixins and component scss files

## Project structure (relevant)

```
src/
├─ components/
│  ├─ api/            # API client + hooks (API.js, apiURL_template.js, useLoad.js)
│  ├─ auth/           # useAuth hook
│  ├─ entity/         # Reusable business components (projects, logs, contributions, modules...)
│  ├─ layout/         # Header, Navbar, Footer, Layout
│  ├─ UI/             # Card, Form, Modal, Actions, Icons
│  ├─ Pie/            # Example chart component
│  └─ views/          # Example pages demonstrating components
└─ Styles/            # SCSS variables, mixins and base styles
```

## Quick start (dev)

1. Clone:
   ```bash
   git clone <repo-url>
   cd components
   ```
2. Install:
   ```bash
   npm install
   ```
3. Run dev server (Vite):
   ```bash
   npm run dev
   ```
4. Open the demo pages (Vite will show the local URL).

## Notes

- This repo is a component library in progress, not a finished application.
- Some components use an API helper and a template `apiURL_template.js`. Create `apiURL.js` locally only if you plan to integrate with a backend.
- Many components include TODOs and example/demo data — review before production use.

## Contribution

- Fork → branch → commit → PR
- Add stories or example pages when adding new components
- Include tests for component logic and accessibility

## License

Provided for demo and educational use. Update license as needed.
