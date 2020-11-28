const convertJToC = require('../core/json2csv');
const { convertCsvToJsonArray, convertCsvToJsonObject } = require("../core/csv2json");

function convertJsonToCsv(jsonString) {
    let result = null;
    try {
        result = convertJToC(jsonString);
    } catch (error) {
        console.log(error);
        throw new Error("Invalid JSON string, can't convert to CSV");
    }
    return result;
}

function convertCsvToHash(csvString) {
    let result = null;

    try {
        result = convertCsvToJsonObject(csvString);
    } catch(error) {
        console.log(error);
        throw new Error("Invalid CSV string, can't convert to JSON");
    }

    return result;
}

function convertCsvToJSONList(csvString) {
    let result = null;

    try {
        result = convertCsvToJsonArray(csvString);
    } catch(error) {
        console.log(error);
        throw new Error("Invalid CSV string, can't convert to JSON");
    }

    return result;
}



module.exports = {
    convertJsonToCsv,
    convertCsvToHash,
    convertCsvToJSONList
};