function convertCsvToJsonArray(csvString) {

    const resultArr = [];

    console.log(csvString.split("\n"));
    const csvRows = csvString.split("\n");
    const headers = csvRows[0];
    const headersColumn = headers.split(",");

    // start iteration from second element
    for (let i = 1; i < csvRows.length; i++) {
        const currentRow = csvRows[i];
        const currentRowList = currentRow.split(",");

        const rowObj = {};

        for (let columnIndex in headersColumn) {
            rowObj[headersColumn[columnIndex].trim()] = currentRowList[columnIndex].trim();
        }

        resultArr.push(rowObj);
    }

    return JSON.stringify(resultArr);
}


function convertCsvToJsonObject(csvString) {

    const resultObj = {};

    console.log(csvString.split("\n"));
    const csvRows = csvString.split("\n");
    const headers = csvRows[0];
    const headersColumn = headers.split(",");

    for (let headerIndex = 0; headerIndex < headersColumn.length; headerIndex++) {
        const headerArr = [];
        for (let csvRow = 1; csvRow < csvRows.length; csvRow++) {
            const columns = csvRows[csvRow].split(",");
            headerArr.push(columns[headerIndex]);
        }
        resultObj[headersColumn[headerIndex]] = headerArr;
    }

    return JSON.stringify(resultObj);
}

module.exports = {
    convertCsvToJsonArray,
    convertCsvToJsonObject
};