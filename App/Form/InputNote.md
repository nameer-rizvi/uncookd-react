### Notes:

#### Re: value && onChange || defaultValue && onKeyUp

1. Creact-react-app uses "value" && "onChange" in their form example - making this the de-facto industry standard.

2. This combination was causing the cursor position to jump on mid-line edits.

3. After Googling, "value" was changed to "defaultValue."

4. "defaultValue" && "onChange" combination was causing select + all + deletes to not register if it was the initial user action on an input.

5. After Googling, "onChange" was changed to "onKeyUp."

6. "defaultValue" && "onKeyUp" combination was not as reliable for catching user key strokes. For example, on the profile form, if a user were quick enough to delete + tab through all of the input fields, some of the values would not update in the form state. This meant, theoretically, that a users delete operation on the "story" textarea will work visually but not functionally. No good.

7. Reverted back to "value" && "onChange" and looked more carefully into the jumping-cursor problem...Turns out, it was being caused by the validation function. The validation function is an async function that returns a promise. As a fix, the state has to be updated prior to the validation function.
