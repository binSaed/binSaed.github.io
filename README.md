# Deploy Workflow Documentation

This repository is deployed with a GitHub Actions workflow named **Deploy to binSaed.github.io**.

## Workflow Behavior

- **Triggers**
  - Pushes to `main`
  - Manual run via `workflow_dispatch`
- **Concurrency**
  - Uses `deploy-pages` group
  - Cancels in-progress runs when a new run starts
- **Permissions**
  - `contents: read`

## Job: `build-and-deploy`

Runs on `ubuntu-slim` and performs:

1. Checkout source with `actions/checkout@v4`
2. Setup Node.js 20 with npm cache using `actions/setup-node@v4`
3. Install dependencies with `npm ci`
4. Build with `npm run build`
5. Deploy `./dist` to `binSaed/binSaed.github.io` (`master` branch) using `peaceiris/actions-gh-pages@v4`

## Required Secrets

- `VITE_PUBLIC_POSTHOG_PROJECT_TOKEN`
- `VITE_PUBLIC_POSTHOG_HOST`
- `DEPLOY_TOKEN`

## Deployment Settings

- **Target repository:** `binSaed/binSaed.github.io`
- **Target branch:** `master`
- **Published directory:** `./dist`
- **CNAME:** `bnsaed.com`
- **Commit author:** `github-actions[bot]`
- **Commit message format:** `deploy: <sha> from bnsaed@<branch>`
- **Orphan commits:** disabled (`force_orphan: false`)
