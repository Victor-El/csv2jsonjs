const fs = require("fs");

const { convertJsonToCsv } = require("./api/api");

const val = fs.readFileSync("./file2.json", "utf-8").trim();

// console.log(val);

const outputCSVString = convertJsonToCsv(val);

console.log(outputCSVString)