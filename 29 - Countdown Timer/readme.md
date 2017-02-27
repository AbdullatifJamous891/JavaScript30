## Lessons Learned

### Working with Time
`Date.now()` gives timestamp in milliseconds
`new Date(milliseconds)` produces a date object, on which can be called:
- `.getDay()`
- `.getHours()`
- `.getMonth()`
- lots of stuff, good times

### Working with Intervals
To review: `setInterval(function() { // thing }, 1000)` will do a thing every 1 second.
`clearInterval(interval)` will stop the interval from running (store the interval in a variable).

### Random
If your html element has a name attribute, you can just use `document.elementName` to grab it.

`.reset()` will clear user-inputted data in forms!

`document.title` grabs the title of the page.

