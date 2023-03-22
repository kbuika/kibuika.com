---
title: Fatal, repository not found
description: I lost four hours of my life to this, I won't let you lose that much time :)
date: 2023-03-22T11:00:00.000Z
---

We primarily work with AWS at work. This means everything exists on AWS, including the code -- it lives in CodeCommit (Basically the Github of AWS). But I encountered a problem when pulling code for another work project and it took me a while to resolve.

## The problem

Not like a problem but kinda. Git allows you access to repositories you own or are public. But for private repositories that you do not own (ie the owner's email is the same as your git credentials email), you need some form of access in order to clone or do anything "git-y".

So you will get an error like this 

```bash
Cloning into 'name_of_repo'...
fatal: repository 'repo_clone_url' not found
```

## The solution

Note: This solution is specific to the problem I had -- the CodeCommit problem, so this will only work if you are cloning from codecommit

```bash 

git config --global credential.helper '!aws codecommit credential-helper $@'
git config --global credential.UseHttpPath true

```

Make sure you do this before you attempt cloning. Next, you may be asked to provide an access ``username`` and ``password``, do so.

Viola! You are ready to hack on!