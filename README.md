# Sam Boeve, personal website

Built with [Astro](https://astro.build). Plain pages, no database, deploys to GitHub Pages.

## Run it on your computer

You need Node.js (you have it) and Git.

```bash
npm install        # once, downloads dependencies into node_modules
npm run dev        # starts a local preview, usually at http://localhost:4321
```

Edit a file, save, and the browser refreshes. Stop the preview with Ctrl+C.
`npm run build` creates the finished site in `dist/` (useful to check that nothing is broken).

## Where to change things

| What | File |
| --- | --- |
| Email, links, portrait, CV file, analytics | `src/data/site.ts` |
| Publications and talks | `src/data/publications.ts` |
| Articles, blog posts, podcasts | `src/data/writing.ts` |
| CV overview | `src/data/cv.ts` |
| Hero text, "What I work on", writing pitch | `src/pages/index.astro` |
| Contact page and services text | `src/pages/contact.astro` |
| Colors and fonts | `src/styles/global.css` (top of the file) |

Text in square brackets, like `[FINAL PITCH TO BE REFINED]`, is a placeholder to replace.

## To do before going public

- Add a portrait: put it in `public/` and set `portrait` in `src/data/site.ts`.
- Refine the hero, services pitch and any wording.
- Replace `public/SamBoeve_CV.pdf` with your latest CV.
- Remove the bracketed placeholders.
- Decide on analytics (see `site.ts`); it is off by default.

## Going live

1. Rename the GitHub repository to `SamBoeve.github.io` (Settings > General).
2. Make it public (Settings > General > Danger zone), unless your plan allows private Pages.
3. Settings > Pages > Build and deployment > Source: **GitHub Actions**.
4. Create the folder `.github/workflows/` in the project and copy `deploy.yml.example` into it as
   `deploy.yml` (a hidden folder, so Claude could not create it for you).
5. Push to `main`. The workflow builds and publishes the site at https://samboeve.github.io within a few minutes.

## Later

- Custom domain: buy one, add it under Settings > Pages, and update `site` in `astro.config.mjs`.
- Own blog posts: ask Claude to add a Markdown blog section to this project.
