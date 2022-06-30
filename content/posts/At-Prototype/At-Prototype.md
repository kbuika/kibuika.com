---
title: Where are my Arrays and Strings ".at"? 
description: The EcmaScript release on June 2022 (ES2022) introduced a new method (.at), it is okay-ish.
date: 2022-06-28T11:00:00.000Z
---

The new method ```.at()``` of indexable values allows us to read an element at a given index. Basically like the bracket ```[]``` operator. The pro is that it supports negative indices, which the bracket operator does not.

### Let's see

```js
// array of names
let names = ["John", "Jacob", "Jingleheimer", "Schmidt"];
console.log(names[0]) // "John"   ====>>> using the bracket operator
console.log(names.at(0)); // "John"  ====>> using the new .at() method
```

This is also the case with Strings  

```js
let person = "Steve";
console.log(person[0]) // 'S'
console.log(person.at(0)) // 'S'
```

But when it comes to using negative values, this is where ```.at()``` gets the bracket ```[]``` operator at.

```js
let person = "Steve";
console.log(person[-1]); // undefined
console.log(person.at(-1)); // 'e'
```

This is a useful feature though I have not gotten a proper use-case for it, but I am sure I will use it in the future. But besides ```.at()``` There are alot of cool features that were released with ES2022, including ```error.cause```, ```Top-level await in modules```, ```Object.hasOwn(obj, propKey)``` and others. Have a look at everything [ES2022](https://262.ecma-international.org/)

Cheers :)