# number-add-commas

This is a simple npm package to add commas to numbers in either the international number system or the Indian number system.

## How to use?

```js
// include the package
import number_add_commas from "number_add_comas";

number_add_commas(100000); //this will return 100,000

number_add_commas(100000, "INT"); //this will return 100,000

number_add_commas(100000, "IND"); //this will return 1,00,000
```
