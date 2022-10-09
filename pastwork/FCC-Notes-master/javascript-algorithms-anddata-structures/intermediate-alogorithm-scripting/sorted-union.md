---
id: sorted-union
title: Sorted Union
---

```js
function uniteUnique(arr, ...rest) {
  const set = new Set(arr.concat(...rest));
  return [...set]
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
```
