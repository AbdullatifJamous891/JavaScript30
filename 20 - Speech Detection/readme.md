## Lessons Learned
### Speech Recognition!
Who knew the browser could do so many awesome things. Those folks at Chrome, etc. are fucking magic workers.

`window.SpeechRecognition` -> add an event listener for `'result'` and another for `'end'` that will start listening again.

Follow the array-like object down the chutes until you get to `transcript`. There's also `isFinal` that goes to `true` if the thing detects you have stopped talking.

You can use `transcript.includes('hello')` to do literally anything at all when a particular phrase is detected (make sure to debounce it so it doesn't run a thousand times while the browser figures out what you are saying).

#### `words.appendChild(p)`
Throws `p` onto the end of the `words` element.