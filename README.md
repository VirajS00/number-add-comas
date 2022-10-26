# number-add-commas

This is a simple npm package to add commas to numbers in either the international number system or the Indian number system.

## How to use?

```js
// include the package
import { addCommas } from "number-add-comas";

addCommas(100000, "INT"); //this will return 100,000

addCommas(100000, "IND"); //this will return 1,00,000
```
