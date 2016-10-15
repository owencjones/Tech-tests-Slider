#Slider Technical test

This is a slider built for a technical test for a company in Cardiff. I wanted to try and expediate the time it took to get to interview for leave reasons, so I've taken the first task, and done it in depth, in order that there be a good demonstration of different Javascript techniques to judge before receiving the remaining task.

##Introduction
Slider.js is a Javascript slideshow made to the standard in the technical test document.  I've used multiple techniques, listed below, to meet the brief.

* Module style
* Javascript constructors, allowing instances of the slider to be created in isolation, making use of the OO principles of [encapsulation](https://en.wikipedia.org/wiki/Encapsulation_(computer_programming)) and [inheritance](https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming)).
* IIFE enclosed getters and setters - Example of [OO mutators](https://en.wikipedia.org/wiki/Mutator_method#JavaScript_example).
* Event loop - Instead of using setTimeout instances, I've used a loop of event loops, attaching events to individual ticks, on a millisecond-by-millisecond basis.

##Warning
Although I've worked hard on this, it is the work of a weekend, and not battle tested for use on your own sites.  You can fork it, use it for academic purposes, or even use it on live sites, but it's not intended for that, and comes with no warranty

##Installation and running
The slider is simple, and you could just use the slider.js file and build it into a page, but it includes a number of gulp modules - mainly for task running, but also including a web server to preview the solution.

Clone the repo, then:

    $npm install

    $gulp serve

###Pre-requisites
* Node
* NPM

##Contact details
You can contact me on [owencjones@gmail.com](owencjones@gmail.com), but please don't ask me for support on this project.
