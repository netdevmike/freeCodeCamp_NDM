---
id: capture-group
title: Capture Group
---

Capture Group

```js
let str = 'apple banana orange';

let regex1 = /(apple)\s(banana)/;
let regex2 = /apple\sbanana/;

console.log(str.match(regex1));
// return [ 'apple banana', 'apple', 'banana', index: 0, input: 'apple banana orange' ]

console.log(str.match(regex2));
// return [ 'apple banana', index: 0, input: 'apple banana orange' ]
```

capture group ES2018 feature：

- [CAPTURING GROUPS](https://flaviocopes.com/javascript-regular-expressions/#capturing-groups)

MDN：

- [Regular Expressions special capturing parentheses](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#special-capturing-parentheses)
