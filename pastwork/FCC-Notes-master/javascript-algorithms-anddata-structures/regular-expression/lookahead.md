---
id: lookahead
title: Lookahead
---

There are two kinds of lookaheads: `positive lookahead` and `negative lookahead`.

## positive lookahead

FreeCodeCamp：

A `positive lookahead` will look to make sure the element in the search pattern is there, but won't actually match it. A positive lookahead is used as `(?=...)` where the `...` is the required part that is not matched.

MDN：

`x(?=y)`: Matches 'x' only if 'x' is followed by 'y'. This is called a **lookahead**.

For example, `/Jack(?=Sprat)/` matches 'Jack' only if it is followed by 'Sprat'. `/Jack(?=Sprat|Frost)/` matches 'Jack' only if it is followed by 'Sprat' or 'Frost'. However, neither 'Sprat' nor 'Frost' is part of the match results.

## nagative lookahead

FreeCodeCamp：

A `negative lookahead` will look to make sure the element in the search pattern is not there. A negative lookahead is used as `(?!...)` where the ... is the pattern that you do not want to be there. The rest of the pattern is returned if the negative lookahead part is not present.

MDN：

`x(?=y)`: Matches 'x' only if 'x' is not followed by 'y'. This is called a negated lookahead.

For example, `/\d+(?!\.)/` matches a number only if it is not followed by a decimal point. The regular expression `/\d+(?!\.)/.exec("3.141")` matches '141' but not '3.141'.

## use

FreeCodeCamp lookahead：

> This can be useful when you want to search for multiple patterns over the same string.

Here is a (naively) simple password checker that looks for between 3 and 6 characters and at least one number:

```js
let sayHi1 = 'Hi, Foo';
let sayHi2 = 'Hi, Bar';
let sayHi3 = 'Hi, Jack';

let regex = /Hi,\s(?!Foo)(?!Bar)/;

console.log(sayHi1.match(regex)); // Return null
console.log(sayHi2.match(regex)); // Return null
console.log(sayHi3.match(regex)); // Return [ 'Hi, ', index: 0, input: 'Hi, Jack' ]
```

`Foo`, `Bar`, `Jack` pattern lookahead

- [x(?=y)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#special-lookahead)
- [x(?!y)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#special-negated-look-ahead)
- [Positive and Negative Lookahead](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/regular-expressions/positive-and-negative-lookahead)
