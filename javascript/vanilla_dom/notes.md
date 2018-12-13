# Vanilla Dom

## Accessing DOM Elements

* `document.getElementById('id')`: returns a reference to the element by the id (`#`)
* `document.getElementByClassName('class')`: returns an array-like object of all child elements which have all of the given class names.
  * Returns an HTMLCollection
  * Use `Array.from()` to convert to array.

* `document.getElementsByTagName('LI');