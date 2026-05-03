# Arseniy Abramidze — Portfolio

Personal portfolio website for Arseniy Abramidze, AI Engineer based in Saint Petersburg.

**Live content:** [github.com/zowelqqee](https://github.com/zowelqqee)

## Stack

- **React 19** + **TypeScript**
- **Vite 8**
- **Tailwind CSS 4** (via `@tailwindcss/vite`)
- Bilingual (EN / RU) — language toggle built-in

## Project structure

```
src/
  data.ts          # All site content — edit here first
  lang.tsx         # Language context/hook
  components/
    Nav.tsx        # Sticky top navigation
    Hero.tsx       # Headline, CTA buttons, social links
    Projects.tsx   # Project cards
    Experience.tsx # Work history timeline
    Skills.tsx     # Tech stack tags
    Education.tsx  # Degree and achievements
    CTA.tsx        # Contact section
    Footer.tsx     # Footer with links
public/
  images/          # Project screenshots
```

## Getting started

```bash
npm install
npm run dev       # dev server at localhost:5173
npm run build     # production build → dist/
npm run preview   # preview the built output
```

## Updating content

All text, projects, experience, and skills live in `src/data.ts`. Edit that file — components pull data from it automatically.

To add a project screenshot: drop the image into `public/images/` and set the `image` field in the project object in `data.ts`.
