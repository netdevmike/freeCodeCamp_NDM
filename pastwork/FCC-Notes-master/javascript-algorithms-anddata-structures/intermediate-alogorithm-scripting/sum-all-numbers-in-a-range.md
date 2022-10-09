---
id: sum-all-numbers-in-a-range
title: Sum All Numbers in a Range
---

```js
function sumAll(arr) {
  const newArr = [...arr]
  newArr.sort((a, b) => a-b)

  let sum = 0;

  for (let i = newArr[0]; i <= newArr[1]; i++) {
    sum += i;
  }

  return sum;
}

sumAll([1, 4]);
```
