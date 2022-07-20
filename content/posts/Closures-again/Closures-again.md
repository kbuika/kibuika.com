---
title: Closures...I am not done yet
description: My quest for closures keeps intensifying. Maybe it has nothing to do with Javascript closures but some other kind of closure. Anyway, let's explore array functions as closures.
date: 2022-07-12T11:00:00.000Z
---

In my previous Closures post, I initially added ``Array prototypes`` as an example of closures and to support that, I used the example of ``Array.filter()`` that uses a filter condition declared in the global scope in order to filter. Look and feels right, but boy ooh boy, or girl ooh girl or non-binary ooh non-binary was I wrong-``ish``.

Technically, it is not the Array prototypes that are closures, it is the arrow functions that they take as arguments that are arguments. Okay, look at this.

Let's create a that cries, smiles while eating and says its name everytime

```js
class Baby{
    constructor(name){
        this.name = name
    }

    cry(){
        console.log(`Ing'aaaaaa, I am ${this.name}`)
    }

    smileAndEat(){
        setTimeout(function(){console.log(`I love food, my name is ${this.name}`)}, 1000)
    }
}

let emma = new Baby("Emma")

emma.cry()   // Ing'aaaaaa, I am Emma
emma.smileAndEat()  // I love food, my name is
```
<img src="https://github.com/kibuikaCodes/kibuika.com/blob/main/content/assets/emma.png?raw=true" alt="title text">

Notice when we call ``emma.cry()``, the value of ``this.name`` is ``Emma`` but when we call ``emma.smileAndEat()``, the value of ``this.name`` is ``undefined``. This is because the ``setTimeout()`` function creates its own scope that does not have the value of name.

How can this be resolved?? - By binding the ``setTimeout()`` function to ``this``

```js
    .
    .
    .
    smileAndEat(){
        setTimeout(function(){console.log(`I love food, my name is ${this.name}`)}.bind(this), 1000)
    }
    .
    .
    .

```

When we rewrite our ``Baby`` class with the ``smileAndEat()`` method looking like this, as in boud by with ``this``, it works!. The rhyming is unintentional btw :)
It works because once the ``setTimeout()`` creates its own scope and tries to access the value of ``this.name``, it will not find a value but it will have a scope to fall back to (the class scope) where it will find the value of name.

<img src="https://github.com/kibuikaCodes/kibuika.com/blob/main/content/assets/kyle.png?raw=true" alt="title text">

We'll see this in the console


But is this the best way to do this? We are talking about Javascript here, not Java, of course there is a better way

#### Arrow Functions
These introduced a new way to write functions in ES6.

```js
// non-arrow functions
function sunset(){
    console.log("Sunsets are cute")
}

// arrow functions
const sunset = () => console.log("Sunsets are cute")
```

These functions are a compact alternative to traditional functional expressions, but they are limited and can't be used everywhere.
One of their differences from traditional ones is that they do not have their own bindings to ``this``, ``arguments`` or ``super``

So when we rewrite our ``smileAndEat()`` method like this:

```js
    .
    .
    .
    smileAndEat(){
        setTimeout(() => {console.log(`I love food, my name is ${this.name}`)}, 1000)
    }
    .
    .
    .
```

<img src="https://github.com/kibuikaCodes/kibuika.com/blob/main/content/assets/ken.png?raw=true" alt="title text">



It works!! 

Essentially, we have rewritten the function argument for ``setTimeout()`` as an arrow function. This is because the arrow function does not have its own ``this`` defined and unlike the traditional function expression, it falls back to the previous scope (class scope) where it finds the value of ``this.name``. And all this works without binding, it is the magic of closures. Our arrow function is bound with it's lexical environment so it is able to fall back to the previous scope.


I think I have closure now, because I really need to move on and so should you.

Cheers :)






