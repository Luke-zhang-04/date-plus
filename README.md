# Date Plus

<p>
    <a href="https://github.com/Luke-zhang-04/date-plus/actions?query=workflow%3A%22Node.js+CI%22"><img src="https://img.shields.io/github/workflow/status/luke-zhang-04/date-plus/Node.js CI?logo=github" alt="build status"/></a>
    <a href="https://github.com/Luke-zhang-04/date-plus/blob/master/dist/dateplus.bundle.min.js"><img src="https://img.shields.io/github/size/luke-zhang-04/date-plus/dist/dateplus.bundle.min.js?label=dateplus.bundle.min.js" alt="minified file size"/></a>
    <a href="https://github.com/Luke-zhang-04/date-plus/blob/master/LICENSE"><img src="https://img.shields.io/github/license/luke-zhang-04/date-plus" alt="license"/></a>
    <a href="https://www.npmjs.com/package/@luke-zhang-04/dateplus"><img src="https://img.shields.io/github/v/release/luke-zhang-04/date-plus?include_prereleases" alt="github version"></a>
    <a href="https://www.npmjs.com/package/@luke-zhang-04/dateplus"><img src="https://img.shields.io/npm/v/@luke-zhang-04/dateplus?logo=npm" alt="npm version"/></a>
    <a href="https://www.npmjs.com/package/@luke-zhang-04/dateplus"><img src="https://img.shields.io/npm/dt/@luke-zhang-04/dateplus" alt="all time npm downloads"/></a>
    <br/>
    <a href="https://codeclimate.com/github/Luke-zhang-04/date-plus/maintainability"><img src="https://img.shields.io/codeclimate/maintainability-percentage/Luke-zhang-04/date-plus?label=Maintainability&logo=code-climate" alt="maintainability"/></a>
    <a href="https://codeclimate.com/github/Luke-zhang-04/date-plus/test_coverage"><img src="https://img.shields.io/codeclimate/coverage/Luke-zhang-04/date-plus?label=Coverage&logo=code-climate" alt="coverage"/></a>
</p>

A simple library to assist with date manipulation (the most horrendous thing a human can be put through), comprising of a series of simple functions for convenience.

## Installation
Download from NPM
```bash
# Using NPM
npm i @luke-zhang-04/dateplus --save

# Using Yarn
yarn add @luke-zhang-04/dateplus
```

Get bundles with curl
```bash
# Development
curl -L https://github.com/Luke-zhang-04/date-plus/releases/download/v<VERSION_NAME>/dateplus.bundle.js -O js/dateplus.bundle.js

# Production
curl -L https://github.com/Luke-zhang-04/date-plus/releases/download/v<VERSION_NAME>/dateplus.bundle.min.js -O js/dateplus.bundle.min.js

# Latest
curl -L https://github.com/Luke-zhang-04/date-plus/releases/download/v2.0.3/dateplus.bundle.min.js -O js/dateplus.bundle.min.js
```

CDN
```html
<!-- Development -->
<script src="https://unpkg.com/@luke-zhang-04/dateplus/dist/dateplus.bundle.js"></script>

<!-- Production -->
<script src="https://unpkg.com/@luke-zhang-04/dateplus/dist/dateplus.bundle.min.js"></script>

<!-- Latest -->
<script src="https://unpkg.com/@luke-zhang-04/dateplus@2.0.3/dist/dateplus.bundle.min.js"></script>
```

## Usage
Run in a node environment with a `require` or `import` statement
```js
const DatePlus = require("@luke-zhang-04/dateplus").default
import DatePlus from "@luke-zhang-04/dateplus"

const myDate = new DatePlus()
```

Run in a browser environment by either using webpack or an alternative on the previous solution, or by adding the `dateplus.min.js` to your javascript within the HTML
```html
<script src="js/dateplus.min.js"></script>

<script>
    // Warning: Object destructuring is an ES6 feature
    const {DatePlus} = DatePlus, // DatePlus is exposed to one global Namespace
        myDate = new DatePlus()
</script>
```


## Documentation
For documentation, visit the [dateplus wiki](https://github.com/Luke-zhang-04/date-plus/wiki)
