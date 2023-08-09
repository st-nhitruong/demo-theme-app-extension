# Guideline Development

This is a template for building a Shopify app base on [Shopify's app template](https://shopify.dev/docs/apps/getting-started).
It contains the basics for building a Shopify App Admin and Shopify App Extension .

## Getting started

### Requirements

1. Shopify CLI 3.x
1. [Node.js](https://nodejs.org/en/download) 16 or higher
1. You must [create a Shopify partner account](https://partners.shopify.com/signup) if you don’t have one.
1. You must create a store for testing if you don't have one, either a [development store](https://help.shopify.com/en/partners/dashboard/development-stores#create-a-development-store) or a [Shopify Plus sandbox store](https://help.shopify.com/en/partners/dashboard/managing-stores/plus-sandbox-store).

### Installation

Install node

```
npm run install
```

### Local development

```
npm run dev
```

To reset your default dev config

```
npm run dev -- --reset
```

### Build

Builds the app, including extensions.

```
npm run build
```

### Deploy

Builds the app and deploys app extensions.

```
npm run deploy
```
