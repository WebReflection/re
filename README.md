# @webreflection/re

[![Coverage Status](https://coveralls.io/repos/github/WebReflection/re/badge.svg?branch=main)](https://coveralls.io/github/WebReflection/re?branch=main)

A template literal tag that sanitizes interpolations.

```js
import re from '@webreflection/re';

const interpolations = '?';

const safe = re`/unescaped (reg|exp) code with ${interpolations}!/m`;

safe.test('unescaped reg code with ?!');  // true
safe.test('unescaped exp code with ?!');  // true
safe.test('unescaped nope code with ?!'); // false
```

This module simply allows creating *RegExp* instances without worrying about interpolation content because it gets sanitized out of the box via latest [RegExp.escape](https://tc39.es/proposal-regex-escaping/) feature or via [escape-string-regexp](https://www.npmjs.com/package/escape-string-regexp) when the former has not been implemented yet.

The whole source code is [less than 20 LOC](./esm/index.js).

Enjoy 👋
