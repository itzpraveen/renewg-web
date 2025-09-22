# RenewG Web Experience

A modern React + Vite single-page site for RenewG, showcasing solar EPC, storage, EV charging, and product trading capabilities. The interface uses a green-energy design system with responsive sections for services, projects, and contact information.

## Local Development

```bash
npm install
npm run dev
```

Visit the URL shown in the terminal (default `http://localhost:5173`).

## Production Build

```bash
npm run build
```

The optimized output is written to `dist/`. Preview it locally with `npm run preview`.

## Deployment

The repository ships with a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds the project and publishes the `dist/` artifact to GitHub Pages whenever the `main` branch is updated.

If you prefer to deploy manually, run `npm run build` and push the contents of `dist/` to any static host.

## Project Structure

- `src/` – React components and styling (`App.jsx`, `App.css`, `index.css`).
- `public/` – Static assets served at the site root (favicon, logo).
- `archive/static-site/` – Original static HTML/CSS/JS prototype retained for reference.

## License

Copyright © RenewG. All rights reserved.
