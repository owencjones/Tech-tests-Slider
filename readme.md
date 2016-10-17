#Slider Technical test

This is a slider built for a technical test for a company in Cardiff. I wanted to try and expediate the time it took to get to interview for leave reasons, so I've taken the first task, and done it in depth, in order that there be a good demonstration of different Javascript techniques to judge before receiving the remaining task.

##Introduction
Slider.js is a Javascript slideshow made to the standard in the technical test document.  I've used multiple techniques, listed below, to meet the brief.

* Module style
* Javascript constructors, allowing instances of the slider to be created in isolation, making use of the OO principles of [encapsulation](https://en.wikipedia.org/wiki/Encapsulation_(computer_programming)) and [inheritance](https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming)).
* IIFE enclosed getters and setters - Example of [OO mutators](https://en.wikipedia.org/wiki/Mutator_method#JavaScript_example).
* Event loop - Instead of using setTimeout instances, I've used a loop of event loops, attaching events to individual ticks, on a millisecond-by-millisecond basis.

##Addressing the points of the brief:
I have addressed the specific points of the brief thus:
###Slide changing logic
The slides change on an interval of 5 seconds, which can be overridden in the config object passed to start the slideshow as 'timeOut'.  The transition time can set by setting the member 'txTime'.
As default, the slides advance every 5 seconds, and loop back around 5 seconds after the last is shown.  The following points apply though:

* The slideshow as default pauses on mouseover - to prevent it changing while a use tries to interact with a slide.  This can be deactivate by setting config.pauseOnHover to false
* The slideshow also reacts to arrow keys, left and right, although not number pad keys.)
* Slide changing is achieved by changing the margin-left of the image container to a multiple of -100%. E.g. Slide 0: 0 * -100% = margin-left: 0, Slide 3: margin-left: 3*-100% = -300%.  A CSS transition does the animation of the change.  This is not supported on some very old browsers, but these would still change the slide - just without the animation.

*NB: Another advantage of using CSS transitions is that there is no need to use constantly updating style values manipulated by JS loops - the slideshow will theoretically be less jumpy on less powerful devices*

###Structure and readability of code
The code is all encapsulated within an Immediately Invoking Function Expression (IIFE), or closure, from which it sets a global variable, 'Slider' which can be used to start slideshows.  More than one slider should be possible, although I've not tested multiple instances.  If it didn't work, the code is at least written with that in mind, and could be made to function that way with minor work.

I've used the method of private and public members to define what functions of the IIFE are available only to the slider, and which are external, and can be invoked by the developer using the slider.  The externally available functions are:

* Slider.moveToSlide(n) - passed and integer of a zero-indexed slide, this function will move the show to it.
* Slider.nextSlide() - proceeds to the nextSlide.  Could be bound to external buttons.
* Slider.prevSlide() - goes to the previous slide in the deck.  Antithesis of the above.

I've also liberally added comments to the code, to ensure it can be understood.

###Experience of the slide change
I've touched on this already, but these points apply to the slide changing:
* It uses transitions, so the CPU power needed is minimised
* Older browsers will simply switch slides, rather than transition them
* Slideshow pauses on hover unless overridden in config.
* Image loading is done by appending the DOM, and the slideshow shows 'loading' until images are loaded to improve user experience, and reduce change of Flash of Unrendered Content (FOUC).  Slides and text are provided to constructor in a JSON object, meaning they are not initially in the DOM, and loading them doesn't affect loading of the rest of the page.
* The slideshow is also responsive, and maintains its aspect ratio regardless.  With more time, I would have added the option to change aspect ratio at certain screen sizes, and to use different images for smaller screens.

###Scalability of solution
The solution has 5 slides, but it is defined by a simple JSON object that could have many more added, or fewer, as necessary.  The only affect this will have is loading time of the images, which is handled gracefully.
If enough slides were added, it could cause the browser to run out of memory, but this would have to be a huge number of slides for the average computer.

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
