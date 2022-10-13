# number-add-commas

This is a simple npm package to add commas to numbers in either the international number system or the Indian number system.

## How to use?

```js
// include the package
import { add_commas } from "number-add-comas";

add_commas(100000); //this will return 100,000

add_commas(100000, system: "INT"); //this will return 100,000

add_commas(100000, system: "IND"); //this will return 1,00,000
```
