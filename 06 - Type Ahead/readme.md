## Lessons Learned
`fetch(endpoint).then().then()` is an a super-quick async call straight from Javascript! The first `then()` is a "promise" and the second actually returns the data. The data doesn't know what kind of data it is, so you'll have to tell it (in the first `.then()`).

"Spread" will allow you to put an array into another array straight - so `array = [1, 2, 3]` and `array2 = []`:
```
array2.push(...array)
```

```
const regex = new RegExp(word, 'gi')
```
This allows for input `word` to be converted into a regex, with flags `g` for "global" and `i` for "case insensitive"

Event "change" only happens when you click outside the input field. "keyup" happens whenever a key is done being pressed.

`.match()` finds a regex inside a string and `.replace()`
replaces it - but only the first occurrence of each.