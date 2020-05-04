# aides-covid
Replaction of https://github.com/etalab/dashboard-aides-entreprises, with data on Opendatasoft platform.

Currently runs in SPA mode only. SSR should work on Netlify and Now (not Github pages), but Apex doesn't like it for the time being…

## How to deploy
### Vercel (Now)
Demo: https://aides-covid.etienneburdet.now.sh/

Create an account on Now.
Install now CLI
```bash
yarn add global now@latest
```
Deploy
```bash
now
```
In the command prompt, replace `npm run build` by `nuxt generate` as a build command when given the opportunity (you can change that from your dashboard)
### Netlify
Demo: https://fervent-visvesvaraya-c88fc8.netlify.app/

* Select your related Github repo from the Netlify dashboard
* Branch: master
* Build folder: `dist`
* Deploy command: `nuxt generate`
### Github pages
Demo: http://etienneburdet.com/aides-covid/

Generate the static site in dist folder and push subtree to branch gh-pages:
```bash
yarn generate
git commit -m 'generate static files for deploy'
git subtree push --prefix dist origin gh-pages
```
## Build Setup

```bash
# install
$ yarn

# serve with hot reload at localhost:3000
$ yarn/nuxt dev

# generate static project
$ yarn/nuxt generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
