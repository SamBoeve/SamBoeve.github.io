# Sam Boeve, personal website

Source for https://samboeve.github.io, built with Astro and hosted on GitHub Pages.

## Folders

- `src/pages`: one file per page of the site (home, publications, writing, CV, contact).
- `src/components`: small reusable pieces, for now the card used to show a piece of writing.
- `src/layouts`: the shared page frame with the header, navigation and footer.
- `src/data`: the content itself, such as site details, publications, writing and CV entries. Most text edits happen here.
- `src/styles`: the global stylesheet with the colors and fonts.
- `public`: files copied to the site as they are, such as the portrait, the CV PDF, the favicon and robots.txt.
- `.github/workflows`: the workflow that builds the site and publishes it to GitHub Pages whenever `main` is updated.

## Generated folders

- `node_modules`: installed dependencies. Not tracked in git.
- `dist`: the built site, created by `npm run build`. Not tracked in git.
- `.astro`: Astro's cache. Not tracked in git.
