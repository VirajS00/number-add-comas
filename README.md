# number-add-comas
This is a simple npm package to add comas to numbers in either the international number system or the Indian number system.

## How to use?
```js
// include the package
const number_add_comas = require('number-add-comas');

number_add_comas(100000); //this will return 100,000

number_add_comas(100000, "int"); //this will return 100,000

number_add_comas(100000, "ind"); //this will return 1,00,000
```

*Note: The second argument is case insensitive*