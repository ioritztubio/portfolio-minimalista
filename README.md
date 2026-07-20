# Ioritz Tubio · Portfolio

Personal portfolio of Ioritz Tubio Sanchez, Software Engineer and Fullstack Developer based in Donostia - San Sebastian.

The site presents professional experience, education, selected projects and a machine-readable CV. It is built as a small, fast Vite application with a static HTML layer so that the portfolio remains understandable to search engines, screen readers and AI agents before JavaScript executes.

## Highlights

- Interactive portfolio built with React and TypeScript.
- English and Spanish interface, with additional translation data for Basque and French.
- Experience and education timeline.
- Selected project cards with live links and case-study pages.
- HTML CV at [`/cv.html`](public/cv.html) and generated PDF downloads.
- JSON-LD profile metadata using `Person` and `ProfilePage` concepts.
- Crawlability files: [`robots.txt`](public/robots.txt) and [`sitemap.xml`](public/sitemap.xml).
- Accessible landmarks, heading hierarchy, keyboard-friendly controls and descriptive links.

## Technology

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Motion for animations
- Lucide React for icons
- `@react-pdf/renderer` for downloadable CV PDFs

## Project structure

```text
.
├── index.html                 # Metadata and crawlable HTML shell
├── public/
│   ├── cv.html                # Text-first CV page
│   ├── robots.txt             # Crawler instructions
│   ├── sitemap.xml            # Public URL inventory
│   └── projects/              # Static project case studies
├── src/
│   ├── components/            # Portfolio sections and UI components
│   ├── context/               # Language state
│   ├── data/                  # Shared TypeScript data types
│   ├── i18n/                  # Translated profile content
│   └── utils/                 # Small rendering helpers
└── vite.config.ts
```

## Run locally

Requirements: Node.js 20+ and pnpm.

```bash
pnpm install
pnpm dev
```

The development server runs at [http://localhost:3000](http://localhost:3000).

## Verification

```bash
pnpm run lint   # TypeScript checks
pnpm build      # Production build
```

The production output is written to `dist/`. Vite copies the static CV, project pages, `robots.txt` and `sitemap.xml` into that directory.

## Content updates

Most visible content lives in the translation files:

- [`src/i18n/en.ts`](src/i18n/en.ts)
- [`src/i18n/es.ts`](src/i18n/es.ts)
- [`src/i18n/eu.ts`](src/i18n/eu.ts)
- [`src/i18n/fr.ts`](src/i18n/fr.ts)

When adding a project:

1. Add the translated project data to each supported language.
2. Add a stable `detailsUrl` when the project has a case study.
3. Create the corresponding static HTML page under `public/projects/`.
4. Add the URL to `public/sitemap.xml`.
5. Keep the JSON-LD and visible project content factually aligned.

## Agent-readable content

The portfolio intentionally exposes important information in ordinary HTML:

- The initial document contains the name, role, projects, experience and education.
- Important sections use native HTML landmarks and headings.
- Dates use machine-readable `datetime` attributes on static pages.
- The CV and case studies are available through normal `<a href>` links.
- Structured data describes the person, profile and selected work.

The interactive React application enhances this HTML after it loads. It should not be the only source of professional information.

## Deployment

Build the project with `pnpm build` and deploy the generated `dist/` directory to any static hosting provider such as Vercel, Netlify or GitHub Pages.

The canonical URLs currently target `https://ioritztubio.dev/`. Update the canonical metadata, Open Graph URLs, sitemap and robots file together if the domain changes.

## Links

- Website: [ioritztubio.dev](https://ioritztubio.dev/)
- GitHub: [github.com/ioritztubio](https://github.com/ioritztubio)
- LinkedIn: [linkedin.com/in/ioritz-tubio](https://www.linkedin.com/in/ioritz-tubio)
