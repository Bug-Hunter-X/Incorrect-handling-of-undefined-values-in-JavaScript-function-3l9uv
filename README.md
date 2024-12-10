# Incorrect Handling of Undefined Values in JavaScript Function

This repository demonstrates a common error in JavaScript where undefined values are not explicitly handled, potentially leading to unexpected behavior or runtime errors.

The `bug.js` file contains a function that attempts to add two numbers. However, it only checks for `null` values and not `undefined`, which causes issues when undefined values are passed as arguments.

The `bugSolution.js` file provides a corrected version of the function, explicitly handling both `null` and `undefined` values to ensure robustness and prevent unexpected errors.

## Bug
The original code does not handle undefined arguments.  It checks for null, but not undefined.  If either `a` or `b` is undefined, the strict equality `===` check will fail, and the code will continue to attempt to execute `a + b`, resulting in an error.