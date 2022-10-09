---
id: search-and-replace
title: Search and Replace
---

```js
function myReplace(str, before, after) {
  if (before.match(/^[A-Z]/)) {
    after = after.slice(0, 1).toUpperCase() + after.slice(1);
  }

  return str.replace(before, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
```
