---
id: overview
title: Functional Programming
---

![functional programming](https://cdn.nlark.com/yuque/0/2018/png/103970/1544358516388-5ef63bfb-fdbf-4653-a4f8-02499cf97e1e.png)

- callbacks

    The functions that are slipped or passed into another function to decide the invocation of that function.

- first class

    Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value, are called `first class` functions. In JavaScript, all functions are `first class` functions.

- higher order

    The functions that take a function as an argument, or return a function as a return value are called `higher order` functions.

- lambda

    When the functions are passed in to another function or returned from another function, then those functions which gets passed in or returned can be called a `lambda`.

- mutation && side effect

    In functional programming, changing or altering things is called `mutation`, and the outcome is called a `side effect`.

- pure function

    A function, ideally, should be `a pure function`, meaning that it does not cause any side effects.


 - map
 - filter
 - slice
 - concat
 - reduce
 - join
  - split
 - every
 - some



Functional Programming

 `slice()`  `shift()` `pop()`。

 `concat()` `unshift()`  `push()`。

 `sort()` ，`sort()` 。

## Currying and Partial Application

### curring

The `arity` of a function is the number of arguments it requires. `Currying` a function means to convert a function of N `arity` into N functions of `arity` 1.



This is useful in your program if you can't supply all the arguments to a function at one time. You can save each function call into a variable, which will hold the returned function reference that takes the next argument when it's available.

```js
//Un-curried function
function unCurried(x, y) {
  return x + y;
}

//Curried function
function curried(x) {
  return function(y) {
    return x + y;
  }
}
curried(1)(2) // Returns 3
```

### partial application


partial application

`partial application` can be described as applying a few arguments to a function at a time and returning another function that is applied to more arguments.

partial application 

```js
//Impartial function
function impartial(x, y, z) {
  return x + y + z;
}
var partialFn = impartial.bind(this, 1, 2);
partialFn(10); // Returns 13
```
