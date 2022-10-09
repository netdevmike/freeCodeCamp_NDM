---
id: falsy-bouncer
title: Falsy Bouncer
---
> Try converting each value to a Boolean.

`filter()`

```js
function bouncer(arr) {
  const newArr = arr.filter(element => !!element);
  return newArr;
}

bouncer([7, "ate", "", false, 9]);
```
