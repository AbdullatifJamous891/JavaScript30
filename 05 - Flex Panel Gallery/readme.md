## Lessons Learned
So much CSS - I need to spend more time with CSS stuff - lots of great things going on out of the box, it would seem.

Javascript lessons... not much! Getting more comfortable with `forEach()` and its shorthand.

On "events" - the ones you can "listen" for - you always have an `e` available to you with a bunch of properties (the event) and also a `this` which is the thing that triggered the event.

### CSS
[flexbox.io](flexbox.io) - tutorial by the Wes on Flexbox (20 videos)

```
.div { display: flex}
.inside_div { flex: 1 }
```
Parent-child relationship allows all the `.inside-div`s to space out evenly. Make different numbers to space them differently.

`justify-content: center` horizontally aligns... sometimes. Otherwise, perhaps need `align-items: center` also.

`.class > *:first-child {}` refers to the first element inside a div. In this case, it is just a `<p>`

`transform: translateY(100%)` moves an element off-screen

`flex-direction: column` aligns things inside the flex box top to bottom