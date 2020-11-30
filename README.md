![CI](https://github.com/Victor-El/csv2jsonjs/workflows/Node.js%20CI/badge.svg)

# Csv2JsonJS
A CSV to/from JSON converter library

## Installation
Csv2JsonJS is available on NPM registry

```bash
npm install csv2jsonjs
```

## Usage
**Converting JSON to CSV**
```js
const fs = require("fs");
const { convertJsonToCsv } = require("csv2jsonjs");

const jsonContent = fs.readFileSync("myfile.json", "utf-8");
const csv = convertJsonToCsv(jsonContent);
console.log(csv);
```
> `convertJsonToCsv` throws error when given invalid JSON string.



**Converting CSV to JSON Object**
```js
const fs = require("fs");
const { convertCsvToHash } = require("csv2jsonjs");

const csvContent = fs.readFileSync("myfile.csv", "utf-8");
const json = convertCsvToHash(csvContent);
console.log(json);
```
> `convertCsvToHash` throws error when given invalid CSV string.

**Converting CSV to JSON Array**
```js
const fs = require("fs");
const { convertCsvToJSONList } = require("csv2jsonjs");

const csvContent = fs.readFileSync("myfile.csv", "utf-8");
const json = convertCsvToJSONList(csvContent);
console.log(json);
```
> `convertCsvToJSONList` throws error when given invalid CSV string.
