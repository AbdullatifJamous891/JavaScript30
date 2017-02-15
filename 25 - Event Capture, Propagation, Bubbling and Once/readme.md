## Lessons Learned
Very academic session, but good stuff

#### Bubbling and Capture
If we add event listeners to nested divs, the click will first be "captured" from the "top" div down, then the event will fire from the "bottom" div up. That is, the event will "bubble" up through the divs.

We can stop this behavior with `e.stopPropagation()`

We can reverse this behavior (fire the event on the "bottom" div) with `capture: true`

#### `once: true`
This option on an `eventListener` will allow the event to fire only once, then unbind itself so no further "clicks" (or any other event) will be allowed.