# aides-covid
Replaction of https://github.com/etalab/dashboard-aides-entreprises, with data on Opendatasoft platform.

## How to deploy
### Vercel
Create an account on Now.
Install now CLI
```bash
yarn add global now@latest
```
Deploy
```bash
now
```

### Netlify

### Github pages
Generate the static site in dist folder and push subtree to branch gh-pages:
```bash
yarn generate
git commit -m 'generate static files for deploy'
git subtree push --prefix dist origin gh-pages
```
## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
