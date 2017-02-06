## Lessons Learned
Ok, this was a long video and there was a whole bunch of stuff about video and canvas and things. I'm going to concentrate on stuff I think I might use later, but this is a good place to keep in mind if I *do* need to work with the webcam / video.

### How images work!
As a photographer, it's pretty cool to see how visual data is stored. I'd never before seen a massive million-pixel array and how r-g-b-alpha breaks down to a simple set of numbers (albiet a huge set of numbers). Really cool to adjust pixels like that!

In this lesson, we literally manipulated every single pixel, adjusting its red, green or blue value. Crazy.

### `setInterval()`
This guy does a thing every however many milliseconds:
`setInterval( () => { myFunction }, 100)`

### Creating and adjusting HTML elements
`document.createElement('a')` makes a link, that can then have stuff done to it, like `.setAttribute()` or `.href = 'whatever'` Cool!

`.innerHTML = 'whatever'` puts stuff inside tags - so if we create that `<a></a>` above, innerHTML puts stuff inside of it, like text or an image.