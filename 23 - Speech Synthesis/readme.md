## Lessons Learned

### Speech Synthesis
Cool built-in browser API thing that does text-to-voice with tons of options. Lots of voices available, though the Swedish one does completely *not* read Swedish.

`var msg = new SpeechSynthesisUtterance()` will create a new instance of an utterance. It holds `rate`, `pitch`, and `text` options, which we can set programmatically.

You can't grab the voices available on page load because the request takes a minute. Have to add an event listener somewhere before you set something equal to the voices.

To speak: `speechSynthesis.speak(msg)`
To stop: `speechSynthesis.cancel()`

### Review of `.filter()`
To return only a set of things: `things.filter(thing => thing.name.includes('Amber'))`. Will return a list of things whose name includes 'Amber'.