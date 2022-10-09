---
id: find-the-longest-word-in-a-string
title: Find the Longest Word in a String
---

- `sort()`

```js
function findLongestWordLength(str) {
  const arr = str.split(' ');
  const sortedArr = arr.sort((a, b) => a.length - b.length)
  return sortedArr[sortedArr.length - 1].length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
```

freeCodeCamp

```js
function findLongestWordLength(str) {
  var words = str.split(' ');
  var maxLength = 0;

  for (var i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }

  return maxLength;
}
```

- `reduce`
- `Math.max()`

```js
function findLongestWordLength(s) {
  return s.split(' ').reduce((x, y) => Math.max(x, y.length), 0);
}
```

```js
function findLongestWordLength(str) {

  //split the string into individual words
  //(important!!, you'll see why later)
  str = str.split(" ");

  //str only has 1 element left that is the longest element,
  //return the length of that element
  if(str.length == 1){
    return str[0].length;
  }

  //if the first element's length is greater than the second element's (or equal)
  //remove the second element and recursively call the function)
  if(str[0].length >= str[1].length){
    str.splice(1,1);
    return findLongestWordLength(str.join(" "));
  }

  //if the second element's length is greater thant the first element's start
  //call the function past the first element
  if(str[0].length <= str[1].length){
    // from the first element to the last element inclusive.
    return findLongestWordLength(str.slice(1,str.length).join(" "));
  }
}
```
