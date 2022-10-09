---
id: return-largest-numbers-in-arrays
title: Return Largest Numbers In Arrays
---


- `map()`
- `Math.max()` 
- `reduce()` 

```js
function largestOfFour(arr) {
  return arr.map(element => element.reduce((x, y) => Math.max(x, y)))
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
```

 `reduce` 

```js
function largestOfFour(arr) {
  return arr.map(element => Math.max(...element))
}
```
