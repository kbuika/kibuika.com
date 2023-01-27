---
title: Ruby; If love was a programming language
description: Ruby is just one of those languages that is just so easy to love.
date: 2023-01-27T11:00:00.000Z
---

A while ago, I decided to check out Ruby - the language. It was a slow Sunday and I had just started this routine where I set Sundays as the days when I tinker with new things. To be honest, going in, I just wanted to evaluate if Ruby is a language I can pick up and maybe do a side project with. Nothing prepared me for what I found.


### How I'd learn a new language

Typically, when you already know something and you are learning something else that is almost similar, it is common to try and compare and contast. It's like learning to fly a plane when you already can drive a vehicle. There are definitely terminologies and techniques that will be similar across. So that is how I was learning Ruby, learning from a point of "Ohh this is how we do it in Javascript, what is it's equivalent in Ruby?". Interestingly, there are things I learnt that they exist in Javascript after I saw them in Ruby, for example, Class Extensions, I had used them before, and React also uses them ``` Class App extends React.Component ``` but I had never though of them deeply.


### The joy of Ruby

While in Javascript I would write `` console.log("something") `` in order to write something out, in Ruby, I just `` puts "something" ``, while in JS we'd `` let name = "Steve" ``, in Ruby, we `` name = "Steve" `` and while in JS we'd `` console.log(parseInt("12")) `` to convert a string to an integer and print it out, in Ruby we `` puts "12".to_i ``. It is either that my standards are too low or I have no standards at all, but this makes me feel so special. It is as if the language itself cares about me, that it doesn't want me to struggle, like it wants to pick me up, take me out for drinks and drop me back home, and text me in the morning ... okay, I am drifting ... anyway, you get it.


### Nuances (or whatever this word means)

 - Puts
    As demonstrated above, `` puts `` is used to write onto the screen. But see this
    ``` ruby
    puts 20 # --> 20
    puts 20.to_s # --> 20
    puts '20' # --> 20

    ```

    All these will output the same value, you'd think that the first one would output the number `` 20 `` but it doesn't, instead, it outputs the string `` 20 ``. Here is the thing - `` puts ``, before it outputs an object, it uses `` to_s `` to get the string version of that object, apparently, the `` s `` in `` puts `` stands for `` string ``. `` puts `` really means `` put string ``.


- Constant Variables
    Constants are declared with a capital letter. * insert mind-blown meme * . Yes!, while in JS we'd `` const name = "Steve" ``, in Ruby, we `` NAME = "Steve" ``. Crap! I love this language.


 - Just like my relationships, most things `` end ``
     Yes, `` end `` is a keyword here. It is used to indicate the end of loops, methods and blocks. 

     ``` ruby
     # typical if statement
     if 1 > 2
        puts "Yes, it is!"
    else
        puts "No, it's not!"
    end

    # custom method
    def sayMoo 
    puts 'mooooooo...'
    end

    sayMoo # calling a method


    # method to get the double of a number
    def doubleThis num
    numTimes2 = num * 2
        return 'return value is '+ numTimes2.to_s # the "return" keyword is optional
    end
    returnValue = doubleThis 44
    puts returnValue

    ```

    Curly braces are technically non-existent, I am yet to use them. Surely, if this ain't beauty, what is !!


I plan to use Ruby much more, my intention is to pick up Ruby on Rails, but of course I had to skim through Ruby, didn't think I'd like it but now I think whoever said *"We find love in the most uncommon of places"* should be given a microphone more often.

I may start streaming my programming tinkering on Twitch and/or Youtube but I guess they'll be private streams for a while, anyway, I'll try document my journey with Ruby as much as I can.


See you in the next one :)
