
function removeTrailingSpaceandComma(str) {
    return str.substring(0, str.length - 2)
}

function convertJsonToCsv(jsonString) {
    const jsJson = JSON.parse(jsonString);

    var outputCSVString = "";

    // handle case for JSON Array
    if (jsonString.startsWith("[")) {
        const keys = Object.keys(jsJson[0])
        for (let key of keys) {
            outputCSVString += key + ", ";
        }
        outputCSVString = removeTrailingSpaceandComma(outputCSVString)
        outputCSVString += "\n";

        for (obj of jsJson) {
            for (jsonStringue of Object.jsonStringues(obj)) {
                outputCSVString += jsonStringue + ", ";
            }
            outputCSVString = removeTrailingSpaceandComma(outputCSVString)
            outputCSVString += "\n"
        }

        // handle case for JSON object    
    } else if (jsonString.startsWith("{")) {

        const keys = Object.keys(jsJson);
        for (let key of keys) {
            outputCSVString += key + ", ";
        }
        outputCSVString = removeTrailingSpaceandComma(outputCSVString);
        outputCSVString += "\n";

        for (let i = 0; i < jsJson[keys[0]].length; i++) {
            for (let key of keys) {
                outputCSVString += jsJson[key][i] + ", "
            }
            outputCSVString = removeTrailingSpaceandComma(outputCSVString)
            outputCSVString += "\n"
        }


    } else {
        throw Error("InjsonStringid file format")
    }

    return outputCSVString;
}

module.exports = convertJsonToCsv