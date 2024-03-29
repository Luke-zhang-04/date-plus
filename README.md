# Date Plus

<p>
    <a href="https://github.com/Luke-zhang-04/date-plus/actions?query=workflow%3A%22Node.js+CI%22"><img src="https://img.shields.io/github/workflow/status/luke-zhang-04/date-plus/Node.js CI?logo=github" alt="build status"/></a>
    <a href="https://github.com/Luke-zhang-04/date-plus/blob/master/dist/iife/dateplus.min.js"><img src="https://img.badgesize.io/https:/raw.githubusercontent.com/Luke-zhang-04/date-plus/master/dist/iife/dateplus.min.js?label=iife/dateplus.min.js%20gzip&compression=gzip" alt="bundle min gzip size"></a>
    <a href="https://github.com/Luke-zhang-04/date-plus/blob/master/LICENSE"><img src="https://img.shields.io/github/license/luke-zhang-04/date-plus" alt="license"/></a>
    <a href="https://www.npmjs.com/package/@luke-zhang-04/dateplus"><img src="https://img.shields.io/github/v/release/luke-zhang-04/date-plus?include_prereleases" alt="github version"></a>
    <a href="https://www.npmjs.com/package/@luke-zhang-04/dateplus"><img src="https://img.shields.io/npm/v/@luke-zhang-04/dateplus?logo=npm" alt="npm version"/></a>
    <a href="https://www.npmjs.com/package/@luke-zhang-04/dateplus"><img src="https://img.shields.io/npm/dt/@luke-zhang-04/dateplus" alt="all time npm downloads"/></a>
    <br/>
    <a href="https://codeclimate.com/github/Luke-zhang-04/date-plus/maintainability"><img src="https://img.shields.io/codeclimate/maintainability-percentage/Luke-zhang-04/date-plus?label=Maintainability&logo=code-climate" alt="maintainability"/></a>
    <a href="https://codeclimate.com/github/Luke-zhang-04/date-plus/test_coverage"><img src="https://img.shields.io/codeclimate/coverage/Luke-zhang-04/date-plus?label=Coverage&logo=code-climate" alt="coverage"/></a>
</p>

A simple library to assist with date manipulation, comprising of a series of simple functions for convenience.

## Difference from date-fns

I didn't know about date-fns when I wrote this. Honestly, go use [date-fns](https://github.com/date-fns/date-fns) instead.

## Installation

Download from NPM

```bash
# Using NPM
npm i @luke-zhang-04/dateplus --save

#using Yarn
yarn add @luke-zhang-04/dateplus
```

Get bundles with curl

```bash
curl -L https://github.com/Luke-zhang-04/date-plus/releases/download/v<VERSION_NAME>/dateplus.bundle.min.js -O js/dateplus.bundle.min.js # Download minified file (recommended)

curl -L https://github.com/Luke-zhang-04/date-plus/releases/download/v<VERSION_NAME>/dateplus.bundle.js -O js/dateplus.bundle.js # Download not minfiied file (not recommended for production)
```

## Usage

Run in a node environment with a `require` or `import` statement

```js
const {default: DatePlus} = require("@luke-zhang-04/dateplus")
import DatePlus from "@luke-zhang-04/dateplus"

const myDate = new DatePlus()
```

Run in a browser environment by either using webpack or an alternative on the previous solution, or by adding the `dateplus.min.js` to your javascript within the HTML by downloading it or using a CDN

```html
<script src="js/dateplus.min.js"></script>
<!-- OR -->
<script src="https://unpkg.com/@luke-zhang-04/dateplus@4.0.0-beta2/dist/esm/dateplus.min.js"></script>

<script>
    const {default: DatePlus} = DatePlus
    const myDate = new DatePlus()
</script>
```

## Documentation

For documentation, visit the [dateplus wiki](https://github.com/Luke-zhang-04/date-plus/wiki)
