---
id: closure
title: Closure
---

Closure:

> In JavaScript, a function always has access to the context in which it was created. This is called closure.

Closure 

Use Closure to Protect Properties Within an Object from Being Modified Externally Closure

```js
function People(name) {
  this.name = name;
  this.sayHi = function() {
    console.log(`My name is ${this.name}.`)
  }
}

const foo = new People('foo');
foo.sayHi(); // My name is foo.
foo.name = 'bar';
foo.sayHi(); // My name is bar.
```


```js
function People(initialName) {
  let name = initialName;
  this.sayHi = function() {
    console.log(`My name is ${name}.`);
  }
  this.setName = function(newName) {
    name = newName;
  }
}

const foo = new People('foo');
foo.sayHi(); // My name is foo.
foo.setName('bar');
foo.sayHi(); // My name is bar.
```


> In JavaScript, a function always has access to the context in which it was created. This is called closure.


- [FreeCodeCamp: Use Closure to Protect Properties Within an Object from Being Modified Externally](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/object-oriented-programming/use-closure-to-protect-properties-within-an-object-from-being-modified-externally)
