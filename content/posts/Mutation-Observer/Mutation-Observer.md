---
title: MutationObserver saved my weekend build 
description: What it is, how it saved me from losing my mind, why you should care.
date: 2022-06-28T11:00:00.000Z
---

Over the weekend, I was working on some "fun" build. One of my favourite youtube channels `The Good Company KE` where I get my music mixes, does not name their videos properly. So if I am in the mood for some good pop-mix, I have to click around and fast-forward till I get the right video. Very exhausting. So I thought I could fix this using a chrome extension.

The extension's logic (simple version)  
```open youtube``` ===> ```check if it is a Grauchi Mix``` ===> ```get my comment from the video comments``` ===> ```replace this comment with the title```

This seems pretty straight forward, right?  
So let's write some code
```js
// get the video title
let videoTitle = document.querySelector("h1.title.style-scope.ytd-video-primary-info-renderer");
// lets see the value
console.log(videoTitle);
```
Ideally, if we have the right the reference to the title element, we should get the video title, so obvious.
But then I got a ```null``` when I logged to the console.  
Lets test in the console  

<img src="https://github.com/kibuikaCodes/kibuika.com/blob/main/content/assets/qs.png?raw=true" alt="title text">

It works!!!  

So it hit me that probably my code is running too early yet the title element has not been passed to the DOM tree.  

And that is where ```MutationObserver``` came in.

A ```MutationObserver``` is an interface that enables us to watch for changes being made to the DOM tree. This means, we can listen to some mutations and then perform an action that reacts according to that mutation.

The ```MutationObserver()``` constructor creates and returns a new MutationObserver which invokes the callback function you provide when changes occur in the DOM.
```js
const observer = new MutationObserver((mutations) => {}) 
// the callback can be different depending on your requirements
```

There are 3 methods we can invoke withing the MutationObserver.

 - ```observe()```. As the name suggests, this is what we invoke in order to configure the ```MutationObserver``` to begin receiving notifications. It can watch a single node or a node and its descendants.
    ```js
    observer.observe(target, config);
    // target is the node you want to listen to
    // config are options for the obsercer, could be the attributes you want to listen to, childList or subtree
    ```

 - ```disconnect()``` This stops an instance of the ```MutationObserver``` from receiving further notifications, until ```observe()``` is called again.
    ```js
    observer.disconnect();
    ```

 - ```takeRecords()``` Removes all pending notifications from the ```MutationObserver```'s notification queue and return them in a new array.


From this, I redesigned how my extension works. So not it listens for changes to the node with the video title and then executes my script. Simply:

```js
const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        if(mutation.addedNodes.length){
            if(mutation.type == "childList"){
                console.log(mutation.target.innerText)
            }
        }
    })
})

const checkTitle = () => {
    let targetNode = document.querySelector("h1.title.style-scope.ytd-video-primary-info-renderer");
    if (!targetNode) {
        window.setTimeout(checkTitle, 500); // delay the execution so all content loads.
        return;
    }
    // any other logic here
    //
    //
    console.log(targetNode.innerText); // now we get our title

    observer.observe(targetNode, {childList: true, subtree: true}); // listens to DOM changes
}

checkTitle();
```

And viola!!! Now we can get our title.

I probably haven't explained enough of ```MutationObserver```, it is definitely a topic that deserves its own article. But MDN, like with everything else, has explained it and its methods very well. Here is the article [MDN MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver)

Cheers :)








