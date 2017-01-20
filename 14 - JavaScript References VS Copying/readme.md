## Lessons Learned: References vs. Copy

Objects and arrays will change all the way down the line after they have been referenced! That is:
```javascript
array1 = [1, 2, 3]
array2 = array1
array2[0] = 'what'
console.log(array1)
    => ['what', 2, 3]
```
Crazy! Changing a "child" also changes the parent. Bollocks! Same thing for "copying" objects - you are only "referencing" them. Here's how to make a real copy that can be changed without affecting the source:

```javascript
array = otherArray.slice()
      = [].concat(otherArray)
      [...otherArray]
      Array.from(otherArray)

var amber = new Person {
    name = "Amber"
    age = 32
}

var newAmber = Object.assign({}, amber, {age: 33})
```
This makes a `newAmber`, older, whose name can be changed without affecting `amber`. But wait! This only goes one "level" deep - if I had `{ plans: { tomorrow: 'sleep', monday: 'code' } }`, everything in `plans` would be changed across all "referenced" objects.