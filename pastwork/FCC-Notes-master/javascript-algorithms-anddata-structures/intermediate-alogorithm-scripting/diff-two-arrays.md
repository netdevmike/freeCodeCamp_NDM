---
id: diff-two-arrays
title: Diff Two Arrays
---

`has()`

```js
function diffArray(arr1, arr2) {
  const arr1Set = new Set(arr1);
  const arr2Set = new Set(arr2);

  const newArr = arr1.filter(element => !arr2Set.has(element))
    .concat(arr2.filter(element => !arr1Set.has(element)));

  // Same, same; but different.
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
```

freeCodeCamp ES6 `includes()` 
