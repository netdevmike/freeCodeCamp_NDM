---
id: spinal-tap-case
title: Spinal Tap Case
---


- `"This Is Spinal Tap"`
- `"thisIsSpinalTap"`
- `"The_Andy_Griffith_Show"`
- `"Teletubbies say Eh-oh"`
- `"AllThe-small Things"`

spinal case (Spinal case is all-lowercase-words-joined-by-dashes)

```js
function spinalCase(str) {
  let newStr = ''

  const reg1 = /[\s_]/g;
  newStr = str.replace(reg1, '-')

  const reg2 = /([a-z])([A-Z])/g;
  newStr = newStr.replace(reg2, '$1-$2')

  newStr = newStr.toLowerCase();

  return newStr
}

spinalCase('This Is Spinal Tap');
```
