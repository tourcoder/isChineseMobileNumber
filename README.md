isChineseMobileNumber
===
Check if a number is a Chinese mobile phone number

Tips: This package was actually on npmjs.org for a few years, but due to a mistake by npmjs, it was deleted and could not be restored. npmjs suggested that I should re-upload it.

### Usage

First, install it from NPM

```
npm install ischinesemobilenumber
```

Second, import & code

```
const checkmobile = require("ischinesemobilenumber");
console.log(checkmobile.ischinesemobilenumber("13000000000"));
```
**Parameter Description**

It is not necessary to add the country code of China (+86) to the mobile number, just place the number.

**Return result**

It will return true or false.

### License

[MIT](LICENSE)
