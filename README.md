# ts-npm-starter ![$ npx startmeup supported](https://img.shields.io/static/v1?label=$npx%20startmeup%20&color=CB3837&logo=npm&message=ts-npm-starter)
> Self-publishing Typescript NPM package starter

# Features
**✓ Auto publish to NPM** - Powered by Github actions  
**✓ Typescript** - Build with confidence  
**✓ Jest** - Don't guess, test

# Get it!
`$ npx startmeup ts-npm-starter [local-folder]`

# Setup
* `yarn` / `npm install`
* Add your username & email in `.github/workflows/publish-to-npm.yml`
* Set package name & description in `package.json`
* Set `NPM_TOKEN` in `Repository Settings > Secrets > "Action Secrets"` (see below)

## Adding your NPM Automation Token
To authenticate the `publish-to-npm.yml` Github Actions workflow, you will need to setup a NPM access token in two easy steps:

### Step #1 - Get a NPM publish token
* Login to [npmjs.com](https://npmjs.com)
* Go to `Access Token` > `Create New Access Token`
* Select an "Automation" token
* **Store the code somewhere!** (for next step)


![Screenshot 2021-06-10 at 07 21 57](https://user-images.githubusercontent.com/1662929/121470061-e604ac80-c9bd-11eb-9bfe-57f89745a14a.png)

### Step #2 - Add NPM token as "NPM_TOKEN" secret
* Go to repository settings on Github (where you push this code to)
* Go to `Settings (repository)` > `Secrets` > `New repository secret`
* Add your NPM publish token (from Step #1) as `NPM_TOKEN`:

![image](https://user-images.githubusercontent.com/1662929/121673465-2f81f400-cab1-11eb-8965-644c858c6b37.png)

# Development
`yarn watch` / `npm run watch`

# Test
`yarn test` / `npm run test`

# Publish to NPM
Push a commit to main branch - `.github/workflows/publish-to-npm.yml` will automatically publish a new patch version to NPM.

# Node Version
`tsconfig.json` is setup to work with Node v12 (supported on AWS Lambda)

# License
MIT
