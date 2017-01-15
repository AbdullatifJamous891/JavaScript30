## Lessons Learned

#### Helpful `console` variations
- `console.log('%c some log', 'font-size: 20px')` -> styles the console log
- `console.warn('No!')` -> makes the log yellow
- `console.error('Hell no!')` -> makes the log red
- `console.info('Facts')` -> makes the log have a blue exclamation point
- `console.assert(varX == varY, 'varX did not equal varY')` -> only displays log if condition is not met.
- `console.dir(element)` -> like selecting a DOM element, gives you a list of methods, etc.
- `console.time('thing') ... console.timeEnd('thing')` -> measures the time it takes for part of the program to run. Put `timeEnd` inside the function you are testing, at the very end.

Finally, if you right-click on a DOM element inside the inspector, you can set a breakpoint on "attribute modification" and if there is an event listener or onClick or the like, it will set a debugger. (Look for "break on...")