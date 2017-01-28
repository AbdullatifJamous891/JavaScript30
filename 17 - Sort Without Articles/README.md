## Lessons Learned

Getting more comfortable with bubble sort:
```javascript
newArray = oldArray.sort(function(a,b) {
    if (a < b) {
        return -1
    } else if (a > b) {
        return 1
    } else {
        return 0;
    }
})
```
Can also be written super-quick:
```javascript
function fn() {
    // Whatever logic needs to happen inside the sort.
}
const newArray = oldArray.sort((a, b) => fn(a) > fn(b) ? 1 : -1);
```

### A little Regex
`.replace(/^(a |the |an )/i)` will replace each of the different words we wanted to replace here. The `i` makes it case-indifferent. The carrot (`^`) means that is what the string starts with.

### Övriga

`.trim()` deletes trailing whitespace.

`.join('')`, of course, makes an array one big string. But if you are seeing a bunch of commas between your HTML elements, this is missing.

You can map an array such that the items in the array become HTML elements. You can assign that HTML to a query selection at the same time.