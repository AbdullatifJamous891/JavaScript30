## Lessons Learned

There are *so many* window attributes! New event: `scroll`. Attributes: `scrollY` shows how far down the page the top of your browser. `scrollY - window.innerHeight` would give you the position of the bottom of your browser.

If you are doing scroll events, it's always good to "debounce" and that is a common thing that can be found online, or copy the function here. "Always debounce your scroll functions."