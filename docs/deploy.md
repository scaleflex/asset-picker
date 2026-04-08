# Deploy

Source code is hosted on **GitLab** (private). Build artifacts and demo are published to **GitHub** (public).

## Remotes

| Remote   | URL                                                        | Purpose              |
|----------|------------------------------------------------------------|----------------------|
| `origin` | `git@code.scaleflex.cloud:scaleflex-plugins/asset-picker`  | Source code (private) |
| `github` | `git@github.com:scaleflex/asset-picker.git`                | Release artifacts (public) |

## Push source to GitLab

```bash
npm run push:source
# equivalent to: git push gitlab main
```

Or manually:

```bash
git push origin main
```

## Publish artifacts to GitHub

Pushes `dist/`, demo site, `package.json`, `README.md`, `LICENSE`, and `CHANGELOG.md` to the `release` branch on GitHub. No source code is published.

```bash
npm run publish:github
```

This runs `scripts/publish-github.sh`, which:

1. Builds the uploader dependency (`../uploader`)
2. Builds the asset-picker library (`dist/`)
3. Builds the demo site (`demo-dist/`)
4. Clones the `release` branch from GitHub (shallow)
5. Copies demo site to root + `dist/` + package metadata
6. Commits and pushes to `github/release`

Custom commit message:

```bash
./scripts/publish-github.sh "Release v0.2.16"
```

### Prerequisites

- `github` remote configured: `git remote add github git@github.com:scaleflex/asset-picker.git`
- SSH key loaded: `ssh-add ~/.ssh/id_ed25519`

## CDN release

Bumps version, builds CDN bundle, uploads to Filerobot CDN, updates references, and tags:

```bash
npm run release
```

## Full release workflow

1. Make changes on `main`, commit, push to GitLab
2. `npm run release` — CDN release + git tag
3. `npm run publish:github` — push artifacts to GitHub
4. `npm run push:source` — push source to GitLab (if not already pushed)
