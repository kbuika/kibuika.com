---
title: using node-html-to-image in NextJS serverless functions
description: i spent an entire day debugging so you don't have to
date: 2023-11-16T11:00:00.000Z
---

If you are using the Vercel Hobby plan to host a serverless function that uses `node-html-to-image`, the short answer is -- it won't work. When you test locally, it'll work, but when you deploy, it won't work.

i won't go into the details of how to set up `node-html-to-image`, i feel like it has good [documentation](https://github.com/frinyvonnick/node-html-to-image) already.

The real pain comes in when you try to deploy. to be fair, this is not because of a constraint in the library but in Vercel itself.

Here are my two-cents on how the library works.

- At the basic level, it takes a HTML string and converts it to an image. If you've studies these conversions a little, you'll know that it is easy to convert html to a pdf than it is to convert it to an image. Most of the time, even when converting to an image, sometimes the html has to be converted to a pdf first -- i think this is how [html-to-image](https://www.npmjs.com/package/html-to-image) works.

- The `node-html-to-image` uses [Puppeteer](https://pptr.dev/) under the hood - which is a library that provides a high-level API to control chrome/chromium binaries over the DevTools Protocol. This means, Puppeteer is practically used in a spawned cluster to load the html in a chromium environment as a page and then a screenshot is taken of the page.

This basically explains why the library would run locally but fail after deployment without adding extra configurations. Since locally, it can access the avaiilable chromium binaries installed when installing the browser you use, but on the server, it fails to find a browser. you'll probably get an error like this:
`Error: Unable to launch browser, error message: Could not find Chrome (ver. 115.0.5790.102).`

So this is where we try get a "browser" for it which involves some additional configurations. Luckily, there is a library called [chrome-aws-lambda](https://www.npmjs.com/package/chrome-aws-lambda) which provides a Chromium binary that can be run on AWS Lambda and GCP Functions. Luckily, Vercel serverless is an abstraction of AWS Lambdas which means this will work.

```js
import chrome from "chrome-aws-lambda"

...

nodeHtmlToImage({
  html: template,
  output: "your ouput image",
  puppeteerArgs: {
    headless: true,
    args: chrome.args,
    executablePath: await chrome.executablePath,
    ignoreHTTPSErrors: true,
  },
});
```

This way, we provide the serverless environment with a Chromium browser context that Puppeteer can use to "generate" the page and take the screenshot.

At the base of it, this should work. However, the chances are that on Vercel hobby, it likely won't

```cmd
Warning: Max serverless function size of 50 MB compressed or 250 MB uncompressed reached
Serverless Function's page: api/download-ticket.js
Large Dependencies Uncompressed size Compressed size
node_modules/chrome-aws-lambda/bin 47.26 MB 47.21 MB
node_modules/next/dist 20.59 MB 5.02 MB
node_modules/typescript/lib 7.83 MB 1.33 MB
node_modules/puppeteer-core/lib 2 MB 534.45 KB
node_modules/react-dom/cjs 1.64 MB 404.02 KB
node_modules/caniuse-lite/data 904.9 KB 325.01 KB
node_modules/@tootallnate/quickjs-emscripten 722.71 KB 300.82 KB
node_modules/handlebars/dist 602.58 KB 156.72 KB
All dependencies 85.89 MB 56.44 MB
Max serverless function size was exceeded for 1 function`
```

This is a Warning that will be popped in the logs -- looks innocent but it is at the core of the issue. Since loading `chrome-aws-lambda` uses up 47MB, it is likely that you will exceed the Hobby limit for serverless functions and this will prevent your function to work as it should.

The fix (which i should have just mentioned at the top) is to get Vercel Pro or just spin up a NodeJS server and host it on another service.
