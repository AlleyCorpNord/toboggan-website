## Toboggan Website – POC

This repository is a proof of concept (POC) exploring a content workflow where:

- Content editors use a CMS to create and maintain content (blog posts, media).
- Developers build pages/components that consume this content in a Next.js static site generator (SSG) setup.
- Automation can assist the workflow (e.g., GitHub Actions to auto-translate content).

- POC Link: https://tobogan-webiste-decap.netlify.app
- POC Admin Link: https://tobogan-webiste-decap.netlify.app/admin/index.html

### Branches and CMS Choices

- **main**: Uses **Decap CMS** (formerly Netlify CMS). This is the successful POC path.
- **intlayer**: Attempt with Intlayer; outcome was not successful for our workflow needs.

### What is Decap CMS?

Decap CMS is a Git-based, headless CMS. It provides an editor UI (served from the site itself, at `/admin/index.html`) to manage content that lives as files in the repository. Key traits:

- **Git-native content**: Edits are commits/PRs in the repo.
- **Editorial workflow**: Draft → Review → Publish with status columns.
- **Previews**: CI can build preview URLs per PR so editors can review changes visually.
- **Authentication**: Works with GitHub/GitLab/Bitbucket or a local backend for development.
- **Extensible**: Collections, widgets, media libraries, and hooks for custom workflows.

### Content Model in This POC

Content is plain Markdown files organized by locale:

```
app/contents/
  blog/
    en/  # English articles
    es/  # Spanish articles
    fr/  # French articles
```

Each Markdown file represents an article (e.g., `YYYY-MM-DD-title.md`). Decap CMS is configured (see `public/admin/config.yml`) to edit these collections directly in Git via the `/admin/index.html` interface.

### Using Content in Next.js (SSG)

1. **Read content at build time**: Next.js reads Markdown files under `app/contents` with `fs.readFileSync` during the build.
2. **Generate routes**: Pages (e.g., `[locale]/blog/[slug]`) are generated using `generateStaticParams` to create static pages per locale/slug.
3. **Static export**: We can export a fully static site suitable for static hosting. Running `npm run build` will export the static site in the `out` directory.

Developers focus on components and page templates; editors focus on content via Decap CMS.

### Decap CMS Editorial Workflow (End-to-End)

From a workflow perspective, when an editor creates or edits an article in `/admin/index.html` with `editorial_workflow` enabled:

1. **Draft created**: A new entry is saved as a draft.
2. **Branch & PR**: Decap CMS commits to a branch(`cms/Blog/YYYY-MM-DD-slug`) and opens a Pull Request.
3. **Preview build**: CI (e.g., Netlify/Vercel) builds a deploy preview for that PR so editors can review.
4. **Automation**: A GitHub Action can run translation scripts (e.g., `scripts/translate-blog.js`) to generate localized copies automatically.
5. **Review & comments**: Reviewers comment on the PR; editors iterate in CMS.
6. **Publish**: Entry is moved to Published; the PR is merged.
7. **Go live**: The next production build includes the published content.

### Decap CMS Configuration

- Location: `public/admin/config.yml` (served at `/admin/index.html`). The `index.html` in the URL is important.
- Defines collections (e.g., `blog`), fields, media folder, and `editorial_workflow`.
- For local development, you can enable `local_backend: true` in the config AND run `npx decap-server` to author content without external auth. 

### Translation Automation

- Script: `scripts/translate-blog.js` demonstrates how a job can translate or propagate content across locales.
- CI: A GitHub Action could run on `pull_request` to:
  - Detect new/updated `en` articles.
  - Run the translation script to create/update `es` and `fr` content.
  - Commit the generated files back to the PR branch for review.

This keeps editors in the loop while reducing manual duplication across locales.

### Running Locally

```bash
npm install
npm run dev
# visit http://localhost:3000
# CMS at http://localhost:3000/admin/index.html
```

If you need to use the CMS without Git provider auth during development, set `local_backend: true` in `public/admin/config.yml`.

### Deploying

- **Static hosting**: Use `npm run build` to produce a static site under `out/`. Includes this in the hosting build config (e.g Netlify build command)
- **Auth**: Create a Github App and OAuth with the hosting provider (e.g: Netlify OAuth), then configure the `backend` property properly in `public/admin/config.yml`

### Notes and Limitations

- This is a POC to validate the workflow, not a production-hardened setup.
- This repo is minimal by design for demonstration.
- The Intlayer approach in the `intlayer` branch did not meet our requirements; Decap CMS on `main` aligned better with a Git-based editorial workflow and static generation.

### Repository Quick Pointers

- Content: `app/contents/blog/{en,es,fr}/...`
- CMS UI and config: `public/admin/`
- Static export example: `out/`
- Utilities: `scripts/translate-blog.js`

### Next Steps

- Explore media library options https://decapcms.org/docs/cloudinary/
- Explore hosting in another cloud service that is NOT Netlify