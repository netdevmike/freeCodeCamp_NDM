---
id: factorialize-a-number
title: Factorialize a Number
---


```js
function factorialize(num) {
  let factorial = 1;
  for(let i = num; i > 0; i--) {
    factorial *= i;
  }
  return factorial;
}

factorialize(5);
```

freeCodeCamp 

```js
function factorialize(num) {
  if (num === 0) { return 1; }
  return num * factorialize(num-1);
}

factorialize(5);

```js
const factorialize = (num, factorial=1) => {
  if (num === 0) {
    return factorial;
  }
  return factorialize(num -1 , factorial * num);
}
```
