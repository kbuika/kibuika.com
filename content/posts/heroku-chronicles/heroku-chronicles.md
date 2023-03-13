---
title: Heroku Chronicles
description: Heroku -- the backend ex-lover we are all trying to get over.
date: 2023-03-13T11:00:00.000Z
---

We have all used Heroku -- at least if you started coding before 2019. Heroku was always the most recommended platform to host APIs when starting off. At the very base of it, it was true, it was good, it was not Docker. Just like everyone else, I have also hosted a coupe of services on Heroku, mainly Nodejs APIs -- CRUD APIs and some cron jobs.

## Things going south

I do not have the details for it but, Heroku was acquired by salesforce and that is when things started going south -- not for Heroku, for us, the "peasants" with hobby projects.

So yea, down the line, Heroku announces that it will be pulling the plug on the hobby tier. Maybe we, or rather, maybe I should have taken that seriously...

## Our open-source project

My friend, Willy and I have been maintaining an oss project, [Tusomeni](https://tusomeni.com), for almost 2 years now. It is a simple past-paper repository for students of the School of Computing at The Technical University of Kenya. It has been a really great project, receiving about 300 MAUs during the university's exam months.

## The plot

The backend, was built with Java, the data, was on PostgresQL, all hosted on -- you guessed it -- Heroku! Of course we saw the warning and alerts, but I guessed we never thought it would be a big deal, or at least that the data would be saved. Nop! we were wrong, we lost all of it. An entire catalogue of pdfs, accumulated over a period of 2 years, gone!

## The comeback

The Java backend had started to become a problem, it was stable -- really good code -- stability was one of the things we were proud of on the project. No regular maintenance, everything just worked. The problem was that it was a challenge to get contributions -- why? -- Java. Not many people, or at least, not many students were willing to contribute to a Java project.

But they were willing to contribute to a Javascript project. Since we were not arm-twisting them to contribute, we let them spin up a Nodejs backend and that is what we have been working on. 

## Who is hosting it

Yea, the new backend lover for hobby projects is [Render](https://render.com). I have used them a couple of times before and I like them. It takes more time to wake the API once it sleeps, but apart from that, it is beautiful


## The thing about open-source

A guest on our [podcast](https://kibuika.com/pod) once said "open-source is the work of God, today you want to contribute, tomorrow you don't". As harsh as that seems, it is true, but open-source runs a huge part of the tech world, we all use it. So that got me thinking, maybe it is time to redesign Tusomeni, not the UI (I don't have the mental capacity for that), but the "business logic", the systems and cushions that will make it self sustainable, that I don't have to source the papers. Yea -- so that's what on my mind.


Anyway -- I am sad that Tusomeni could not be there for the students having exams at the moment, but hopefully, it will be there for the next.

