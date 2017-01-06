## Lessons Learned
Whew, so much for the first lesson. I am going to get my hat blown back by this thing.

[keycode.info](http://www.keycode.info) - shows you which key code corresponds to the keys on your keyboard

HTML: kbd tag formats text plainly in-line.

Javascript's `const` is like a `var` but they can't be reassigned and can't be declared. We used them here for reasons I'm not entirely sure of... 

You can make your own HTML data bits by using `data-` so you can have `data-key` or `data-octopus` and store that information in the tag itself.

The HTML `<audio>` tag references an audio file. It can be played with Javascript by simply `obj.play()`

We used `audio[data-key="${e.keyCode}"]` with back-ticks around it to select the audio tag with the `data-key` corresponding to the one pressed. String interpolation in Javascript, at least in this setting, is done with `"${}"`

`if (!obj) return;` ends the function if the object is null!

`key.classList.add('cssClass')` == jQuery's `key.addClass('cssClass')`

Loops in Javascript:
`keys.forEach(key => key.addEventListener('transitionend', functionName)` Adds an event listener on each key (div). You can also do this on `animationend` and probably a bunch of other stuff. When executing a function from an `eventListener` you can use `this`, which is the object that the event was called on - in this case `key`.