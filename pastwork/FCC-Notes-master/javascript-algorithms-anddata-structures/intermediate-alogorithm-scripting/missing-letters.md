---
id: missing-letters
title: Missing letters
---

```js
function fearNotLetter(str) {
  const allLetters = "abcdefghijklmnopqrstuvwxyz";
  const strArr = [...str];
  const firstLetterIndex = allLetters.indexOf(strArr[0])

  let missingLetter

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] !== allLetters[i + firstLetterIndex]) {
      missingLetter = allLetters[i + firstLetterIndex]
      break;
    }
  }

  return missingLetter;
}

fearNotLetter("abce");
```
