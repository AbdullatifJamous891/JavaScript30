## Lessons Learned

`'submit'` works for clicks, triggers from elsewhere, etc. (better than `'click'` most of the time... but couldn't get it to work for the other buttons).

Use the damn "Preserve log" checkbox when you need it!

`(form).reset()` clears a form.

Hardly needs saying, but you can put whatever code you want into the string interpolation: ``${}``, not just variables to be displayed.

#### localStorage

Can only store strings in local storage, so here comes JSON to the rescue.

`localStorage.setItem('key', value)` Saves to local storage.

`localStorage.getItem('key')` retrieves.

If you need to store something other than a simple string, use `JSON.stringify()` and `JSON.parse()`

`thing = otherThing || []` - reminder: this will create a new array if the `otherThing` doesn't exist or is null

#### Event Delegation
#####Or: how to listen for shit that isn't there yet.

Listen on the parent, then use `e.target` to check that you are connecting with the right element inside the parent. (That is, one big listener on the parent but it will know in `e` which actual piece of the parent was clicked on, and which child that corresponds to.)

`.matches('input')` will target only inputs inside a parent div / form, etc.