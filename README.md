# 🗳️ Bangkok Election 2022

Monorepo for Bangkok Election 2022 projects managed by [Turborepo](https://turborepo.org/) and [Yarn](https://classic.yarnpkg.com/lang/en/)

## 🌳 Environments

| Name       | URL                                        | `process.env.BUILD_ENV` |
| ---------- | ------------------------------------------ | ----------------------- |
| Production | https://bkkelection2022.wevis.info         | `PRODUCTION`            |
| Staging    | https://staging.bkkelection2022.wevis.info | `STAGING`               |
| Local      | http://localhost:3000                      | -                       |

## 🍱 Project structure

- **`/apps`** Framework independent subprojects

  - `/landing` Landing page ([SvelteKit](https://kit.svelte.dev/))
  - `/socialtrend` Social trend analysis ([NuxtJS](https://nuxtjs.org/))
  - `/candidate` Candidates information ([NextJS](https://nextjs.org/))
  - `/map` Election map of results in the past and realtime ([Preact](https://preactjs.ir/))

- **`/moderator`**
  - Development server using [Express](https://expressjs.com/) with reverse proxy and static assets serving.
  - Build script to combine every apps build file in the root `/build`
- **`/packages`** Shared packages used by apps
  - `/tailwind` [Tailwind](https://tailwindcss.com/) config and base stylesheet with shared design guideline
  - `/ui` Shared web component written by [SolidJS](https://www.solidjs.com/) and typography stylesheet from design system
  - `/wordpress-api` TypeScript library help fetching data from [The Standard](https://thestandard.co) and [WeVis](https://wevis.info) Wordpress REST API
- **`/static`** Static directory serving at `/static` eg. favicon and fonts

## ⚙️ Setup

[Yarn 1](https://classic.yarnpkg.com/lang/en/) is required

Install the dependencies

```
yarn
```

### Develop

To develop all apps and packages, run the following command:

```
yarn run dev
```

Each app will be started in development server in difference port

- **Landing**: http://localhost:3001
- **Social trend**: http://localhost:3002/socialtrend
- **Candidate**: http://localhost:3003/candidate
- **Map**: http://localhost:3004/map

While **moderator** will run at http://localhost:3000 and

- Forward `/` request to **Landing** dev server
- Forward `/socialtrend` request to **Social trend** dev server
- Forward `/`candidate request to **Candidate** dev server
- Forward `/map` request to **Map** dev server
- Serve files in `/static` at `/static`
- Serve UI package built output at `/ui`

Each project can also be run individually (with moderator proxy and ui package)

```
yarn run dev:landing
yarn run dev:candidate
yarn run dev:socialtrend
yarn run dev:map
```

### Build

To build all apps and packages, run the following command:

```
yarn run build
```

Each project will be built and combined in root `/build` folder

## ⚽ Working style

- We use Trunk-based development.
  - No braches, we all push to main branch.
  - Pull rebase `git pull --rebase` often. Before you start coding and pushing.
  - Continuous integration: try not to leave your code without pushing overnight.
  - Use **feature flag** (with `process.env.BUILD_ENV` or other environment variable) to prevent unfinished feature to be deployed to the production.
- Each time the code is pushed to main branch, Github Action will build and deploy to the staging environment.
- Deploy to production is now done manually. Pipeline implementation is in the plan.
