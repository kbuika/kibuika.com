---
title: "the last minute bug"
description: the stupid bug i missed because i couldn't test
date: 2023-11-15T11:00:00.000Z
---

Last month, at [tikomatata.com](https://tikomatata.com) we had our first event happen. the event was `Echoes: City of Love`, a concert by Ethan and Kinoti (two youngings who are making some good music). The story behind how we got to work with them and the events of the day we went live with their tickets deserve an entire book -- i was excited, had a panick attack, extinguished customer support and tech support fires, had our payment provider fail on us and had to pull the plug all in a 6-hour period.

The event happened on the 20th and on the 19th, I was still working on the ticket verifier app. While testing, I noticed that, for all orders with multiple tickets, when you download the tickets, all QR Codes are the same. This meant that if someone bought three tickets -- once one ticket is scanned, all others are invalid.

```js
const downloadTicket = () => {
  setTimeout(() => {
    toPng(ticketRef.current, { cacheBust: false })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `${ticket?.name || ticket?.ticketType}-${
          event?.eventName
        }.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
        errorToast(
          "An error occured while downloading your ticket. If the issue persists, please contact us."
        );
      })
      .finally(() => {
        setOpen(false);
      });
  }, 100);
};
```

This is the piece of code, I was running. Hacky as it looks, it kinda worked -- until i realised it didnt.

The `toPng` method is from the package `html-to-image` - used to convert a html component to and image, which was the intended feature. The reason why it is wrapped in a `setTimeout` is because the method takes a `HTMLElement` and not a html string. Which meant that I had to put the HTML in the DOM before I take it and pass it the method --- I should post-mortem this and confirm for sure it must be done this way. Anyway, so I would trigger a modal with the ticket element, get the ticket using `useRef` and then download the image.

It is only while testing the verifier app that I realised that all the QR Codes from an order with multiple tickets are the same. Crap! -- since it was too late to fix anything -- I got manual backups for all purchases and orders and we sorted that out.

Coming back to fix this, I had three ideas

- the useRef is wrong
- NextJS is caching the images
- html-to-image does not support the <Image /> tag

After trying to test out all scenarios and trying to post-mortem the issue, I found out that it is `html-to-image` that doesn't support the `<Image />` tag and for some reason NextJS seems to coerce the `<img />` tag to behave like the `<Image />` and hence, even that wouldn't work.

So my teammate and i went on a feature architecture "hunt" that involved trying to restructure the tickets to be handled in the backend. Sadly, the backend is built in Java and Java doesn't seem to have proper libraries that can handle html content.

That's when I landed on `node-html-to-image` -- and this came with another headache that I've written about [here](https://kibuika.com/posts/using-node-html-to-image)
