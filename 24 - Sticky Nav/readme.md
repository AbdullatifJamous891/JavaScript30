## Lessons Learned
Not a lot of tricky code on this one, but a suuuuuuuper helpful thing to know how to do. How many times have I struggled trying to get Foundation's damn grid to be sticky. Now I can just do it myself.

### Changing the class on the `body`
Tip for this one was to do `.classList.add('className')` to the `body` and not individual elements. That way, in your CSS file, you can do
```
.className .whateverClass {
    // new styles for "active" class
}
```

You keep all of the transition things out of the DOM and have those styles loaded already from CSS.

#### Sticky nav!