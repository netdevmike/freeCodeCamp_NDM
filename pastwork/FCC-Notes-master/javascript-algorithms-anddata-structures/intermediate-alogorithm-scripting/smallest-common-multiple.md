---
id: smallest-common-multiple
title: Smallest Common Multiple
---

```js
/**
 * @param {number} num1
 * @param {number} num2
 */
function smallestCommonsOfTwoNumber (num1, num2) {
  let max = num1 < num2 ? num1 : num2

  for (let i = 2; i <= max; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      return i * smallestCommonsOfTwoNumber(num1 / i, num2 / i)
    }
  }

  return num1 * num2
}

/**
 * @param {array} arr
 */
function smallestCommons(arr) {
  const copyArr = [...arr];
  copyArr.sort((a, b) => a-b);

  let allNumArr = [];
  for(let i = copyArr[0]; i <= copyArr[1]; i++) {
    allNumArr.push(i);
  }

  const result = allNumArr.reduce((a, b) => smallestCommonsOfTwoNumber(a, b))

  return result;
}


smallestCommons([1,5]);
```
