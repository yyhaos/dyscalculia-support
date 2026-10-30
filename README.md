# Understanding Dyscalculia

A small, single-page starter site for the project **Understanding Dyscalculia: Learning Numbers Through a Different Lens**.

## Run locally

Install dependencies once:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Open the URL printed in the terminal (usually `http://localhost:5173`).

## Build and preview

Create the production-ready static site in `dist/`:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

The relative asset paths are configured for GitHub Pages project sites. This repository includes a GitHub Actions workflow that builds and deploys this project when its files change on `main`.

To enable deployment, open the repository's **Settings → Pages** and set the build and deployment source to **GitHub Actions**. The published URL will appear in the workflow run and the repository's Pages settings.
