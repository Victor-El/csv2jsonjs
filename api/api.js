const convertJToC = require('../core/json2csv');

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



module.exports = {
    convertJsonToCsv
};