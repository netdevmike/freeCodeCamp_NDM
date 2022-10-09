---
id: chunky-monkey
title: Chunky Monkey
---

```js
function chunkArrayInGroups(arr, size) {
  let newArray = []
  while(arr.length !== 0) {
    newArray.push(arr.splice(0, size));
  }
  return newArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
```

FreeCodeCamp 
- `slice()`
- `concat()` 

```js
function chunkArrayInGroups(arr, size) {
  if (arr.length <= size){
    return [arr];
  }
  else {
    return [arr.slice(0,size)].concat(chunkArrayInGroups(arr.slice(size),size));
  }
}
```
