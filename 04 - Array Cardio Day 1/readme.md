## Lessons Learned
Yikes, so much new stuff. Also, WebStorm hates the `=>` syntax. What to do?

`console.table(x)` shows a pretty table!

`Array.from(x)` or `[... x]` will put x into an array.

You can call `querySelector()` from any DOM element, not just `document` or `window`.

`.split(', ')` breaks up items in an array by commas. Could split by whatever.

### `.filter()`
```
array.filter(function(x) {
  if(something) {
    return true;
  });
```
Filter is a search through an array to return another array that contains only those elements that match the search. `x` is the stored object during each iteration through the array.

### `.map()`
```
array.map(x => x*2);
```
This will return an array with every value in it multiplied by two. `map()` makes a change to each item in an array. It always returns an array of the same length as the one that went in.

### `.sort()`
```
array = [1, 2, 3, 4]
array.sort((x, y) => x < y ? 1 : -1 )
```
will reverse the array, returning `[4, 3, 2, 1]`. When you give something a -1, it moves down and a 1 moves it up. Can also write this as:
```
array.sort(function(x, y) {
  if(x < y) {
    return 1
  }
});
```

### `.reduce()`
```
array.reduce(function(total, x) {
    return total + x
}, 0);
```
Adds up everything in an array. Loops through array and ... somehow adds up all the numbers into `total`, which we define to start at 0.

_Need to read up on `reduce()` some more_