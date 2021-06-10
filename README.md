# ts-npm-starter ![$ npx startmeup supported](https://img.shields.io/static/v1?label=$npx%20startmeup%20&color=CB3837&logo=npm&message=ts-npm-starter)
> Self-publishing Typescript NPM package starter

# Features
**✓ Auto publish to NPM** - Powered by Github actions  
**✓ Typescript** - Build with confidence  
**✓ Jest** - Don't guess, test

## Get it!
`$ npx startmeup ts-npm-starter [local-folder]`

## Setup
* `yarn` / `npm install`
* Add your username & email in `.github/workflows/publish-to-npm.yml`
* Set package name & description in `package.json`

## Development
`yarn watch` / `npm run watch`

## Test
`yarn test` / `npm run test`

## Publish to NPM
Push a commit to main branch - `.github/workflows/publish-to-npm.yml` will automatically publish a new patch version to NPM.

## Node Version
`tsconfig.json` is setup to work with Node v12 (supported on AWS Lambda)