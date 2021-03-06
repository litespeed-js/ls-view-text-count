# ls-view-text-count

![npm](https://img.shields.io/npm/dt/litespeed.js.svg)
[![npm version](https://badge.fury.io/js/ls-view-text-count.svg)](https://badge.fury.io/js/ls-view-text-count)
[![Build Status](https://travis-ci.org/litespeed-js/ls-view-text-count.svg?branch=master)](https://travis-ci.org/litespeed-js/ls-view-text-count)
[![Chat With Us](https://img.shields.io/gitter/room/litespeed-js/community.svg)](https://gitter.im/litespeed-js/community?utm_source=share-link&utm_medium=link&utm_campaign=share-link)

Litespeed.js view component that adds a word counter to your input elements.

## Installation

This package is wrapped as a [Litespeed.js](https://github.com/litespeed-js/litespeed.js) component. To use it, you need to init a new [Litespeed.js](https://github.com/litespeed-js/litespeed.js) project or use an exisiting [Litespeed.js](https://github.com/litespeed-js/litespeed.js) project. To learn more about [Litespeed.js](https://github.com/litespeed-js/litespeed.js) [Javascript web framework](https://github.com/litespeed-js/litespeed.js) got to the [official repository](https://github.com/litespeed-js/litespeed.js).

Install with [NPM](https://www.npmjs.com/):

```bash
npm install ls-view-text-count
```

Install with CDN:
```html
<script src="https://cdn.jsdelivr.net/npm/ls-view-text-count"></script>
```

## Getting Started

When input maxlength attribute is defined, the counter will show remaining chars left until the limit is going to be reached. When no maxlength attribute is set, the counter will just count how many word and chars have been written.

### Example 1

Setting with maxlength attribute:
```html
<input type="text" value="Hello World!" maxlength="20" data-ls-text-count />
```

Result:
```html
<input type="text" value="Hello World!" maxlength="20"><span class="ls-view-text-count">8 / 20</span>
```

### Example 2

Setting without maxlength attribute:
```html
<input type="text" value="Hello World!" data-ls-text-count />
```

Output:
```html
<input type="text" value="Hello World!"><span class="ls-view-text-count">2 words and 12 chars</span>
```

## Contributing

All code contributions - including those of people having commit access - must go through a pull request and approved by a core developer before being merged. This is to ensure proper review of all the code.

Fork the project, create a feature branch, and send us a pull request.

For security issues, please email security@appwrite.io instead of posting a public issue in GitHub.

## Copyright and license

The MIT License (MIT) http://www.opensource.org/licenses/mit-license.php
