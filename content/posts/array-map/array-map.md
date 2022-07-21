---
title: "Under the hood:: Array.map()"
description: I have a soft spot for Array prototypes in Javascript, I use them alot, but how do they really work under the hood? Lets explore the Array.map().
date: 2022-07-17T11:00:00.000Z
---

As a dev, it is normal to get lost in abstractions. The moment something works, we just say a silent "Amen" then rush to twitter. We all do this, right? :)

But behind all this abstractions, something else is happening, and someone wrote it, it is not magic, it is also just Javascript. So I am starting a sequel ``Under the hood::`` that is my attempt at uncovering the inner abstracted workings of some of my favourite and common Javascript techniques.

### Array.prototype.map()

The ``.map()`` method creates a new array populated with the results of calling a provided function on every every element in the calling array ([MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)).
Basically, given an array and an action, the ``.map()`` will perform the provided action on every item on the array and then return a new array.

Example

```js
const arr = [1, 2, 3, 4, 5]

const newArr = arr.map(i => i * 3) 
console.log(newArray) // [3, 6, 9, 12, 15]
```
Notice the resultant array ``newArr`` is the result of multiplying each of the items in ``arr`` by 3, this is defined by the function ``i => i*3``, which is just an arrow callback function (it could have been a traditional function btw  ``const newArr = arr.map(function(i){ return i * 3 })``).


From this example, we can see the parameters that the ``.map()`` method takes:
 - array (``arr``) - This is the array that ``map`` is called on

 - callback function (``i => i * 3``) - This is the function that is called on every item in the array. After completion, it returns the new item that is stored in the new array.

 - element (``i``) - This is the current element being processed.

These are just the ones we can see from our example, however, there are others like
 - index - The index of the current element

 - ``thisArg`` - The value to use as ``this`` when executing the callback function

And that's pretty much it, but we are not done yet, we have to go under the hood. 

### Under the hood

As you can imagine, we need to create a function called map, for a start

```js
let arr = [1, 2, 3, 4, 5, 6]

const map = () => {
    // our code here
}
```

We have declared a variable that has our original array and we have also declared a function called map and that is what we'll be building. Back to our code, the idea is that our function will take 2 parameters, an array and a function and then loop through every single item of the array while executing the function on it.

```js
let array = [1, 2, 3, 4, 5, 6]

const map = (arr, fn) => {
    let newArr = []; // the new array that we will return
    // loop through the array 
    for(let n of arr) {
        // run the passed function and get the result
        let res = fn(n) 
        // push the response in the array
        newArr.push(res)
    }

    return newArr
}
```

And that's pretty much it, yes, imagine, that is it. Lets throw this in the console and test

<img src="https://github.com/kibuikaCodes/kibuika.com/blob/main/content/assets/emma.png?raw=true" alt="title text">

It works!! ***silent amen***, time for twitter now. :)

But really, this is just the simplest way to implement this, we have not considered alot of the parameters for the ``.map()``, but anyway, you get the gist.

So that was **map()** and how cool it is, so when should we not use it??

 - When you do not need the array being returned. - ``map()`` returns a new array and if you do not need to use this new array being returned, using the ``map()`` is considered an anti-pattern. For this, use ``forEach`` or ``for...of``

 - When you are not returning a value from the callback


 And yea, this is really actually it. I am done! ``Array.prototype`` are one of the best methods collections in Javascript and I intend to explore most of them under the hood. This was ``map()`` and I hope it makes sense for you now.

 Cheers :)











