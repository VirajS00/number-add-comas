# number-add-commas
This is a simple npm package to add commas to numbers in either the international number system or the Indian number system.

## How to use?
```js
// include the package
const number_add_commas = require('number-add-commas');

number_add_commas(100000); //this will return 100,000

number_add_commas(100000, "int"); //this will return 100,000

number_add_commas(100000, "ind"); //this will return 1,00,000
```

*Note: The second argument is case insensitive*