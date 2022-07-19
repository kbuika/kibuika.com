---
title: Closures  
description: If our function was tea and the surrounding environment was a cup - then the entire "cup of tea" is a Closure. The difference is that Closures are not every developer's "cup of tea".
date: 2022-07-07T11:00:00.000Z
---

I was once asked to explain closures at an interview, I froze and I still have PTSD from that experience. So I vowed to never let it happen again.

According to [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures), a closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). They allow us to access an outer function's scope from within an inner function.

To understand closures, you also need to understand [scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope), which is the current execution context. This is really a spiral of concepts, because now you need to have an idea of what is an execution context, but think of it as just the environment in which our Javascript is executed. There's more to it but let us just leave it at that for now, back to closures.

Given MDN's definition of a closure, we can clearly see that a closure is a function that has its own execution context(function execution context) and the execution context of the surrounding environment. So if the surrounding environment is another function execution context, it has that and if the surrounding environment is the global execution context, it has that too.

enough talk, let's code...

```js
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12

```

Here, we have a factory function (a function that creates another function), ``makeAdder(x)``, which takes in an argument ``x`` and returns an anonymous function that takes ``y`` as an argument and returns the sum of x and y.

The function factory creates two new functions ``add(5)`` and ``add(10)`` which are both closures. The magic here is that both of these functions use the same function body definition but store different lexical environments. In ``add(5)``'s lexical environment, ``x`` is 5 and in ``add(10)``'s lexical environment, ``x`` is 10. This way the functions are referencing different environments and that is why we get different results.

Let's see another example

```js
function Baby(name){
    function isCrying(){
        console.log(`${name} is crying lustily`)
    }

    function isCute(){
        console.log(`${name} is extremely cute`)
    }

    return {
        isCrying,
        isCute
    }
}

let annette = Baby("Annette")
let joe = Baby("Joe")

console.log(joe.isCrying()) // Joe is crying lustily
console.log(annette.isCrying()) // Annette is crying lustily
```

You would think the functions ``isCrying()`` and ``isCute()`` would throw an error because we are trying to use a variable that is not in their scope, but no, these are closures so we have access to ``name`` because it exists in the environment in which the functions are invoked. Simply, ``isCrying()`` and ``isCute()`` maintain a reference to their lexical environment in which an instance of ``name`` exists.

#### Some practical applications

1. React's useState Hook

    Yes, React's [useState](https://reactjs.org/docs/hooks-state.html) makes use of closures in order to keep track of references to the previous state. This way it is able to compare the new value and the previous value and decides whether to update the value in state. I will talk more about this in a later post.

2. Arrow Functions
    Imagine you are trying to filter an array given a condition.
    ```js
    const studentName = "Steve"

    const students = [{name: 'John', grade: 'A'}, {name: 'Steve', grade: 'B'},
     {name: 'Mary', grade: 'C'}, {name: 'Bob', grade: 'D'}, {name: 'Steve', grade: 'F'},
      {name: 'Jane', grade: 'F'}];
    // in this case, we want to get only details for students whose name is "Steve"

    const studentsNamedSteve = students.filter((student) => student.name === studentName); 
    // [{name: 'Steve', grade: 'B'}, {name: 'Steve', grade: 'F'}]

    ```

    From this example, we see the arrow function in``Array.filter()`` method uses the variable ``studentName`` that is in the global scope. This makes it a closure. I will explore more of Arrow Functions at a later post and we'll see the advantages.


There is alot more to Closures than I could give in this post, but closures are really powerful and you should definitely give them a spin. Thats it for now!

Cheers :)

