# Shopify App Template - Node

This is a template for building a [Shopify app](https://shopify.dev/docs/apps/getting-started) using Node and React. It contains the basics for building a Shopify App Admin and Shopify App Extension .

## Shopify App Admin

Shopify App Admin is contained inside the `/web` folder.

## Shopify App Extensions

All extensions are contained inside the `/extensions` folder.


## Getting started

### Requirements

1. You must [download and install Node.js](https://nodejs.org/en/download/) if you don't already have it.
1. You must [create a Shopify partner account](https://partners.shopify.com/signup) if you don’t have one.
1. You must create a store for testing if you don't have one, either a [development store](https://help.shopify.com/en/partners/dashboard/development-stores#create-a-development-store) or a [Shopify Plus sandbox store](https://help.shopify.com/en/partners/dashboard/managing-stores/plus-sandbox-store).

### Installation

```
npm run install
```

### Create extension
- Generates a new [app extension](https://shopify.dev/docs/apps/app-extensions). For a list of app extensions that you can generate using this command, refer to [Supported extensions](https://shopify.dev/docs/apps/tools/cli/commands#supported-extensions).

```
npm run generate extension
```
- Each new app extension is created in a folder under ``extensions/``.

### Local development

```
npm run dev
```

- To reset your default dev config

```
npm run dev -- --reset
```

### Build
- Builds the app, including extensions.
```
npm run build
```

### Deploy

- Builds the app and deploys app extensions.

```
npm run deploy
```

