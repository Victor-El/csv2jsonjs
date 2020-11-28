const j2c = require("../core/json2csv");


test("json array should produce correct csv", () => {
    const expectedCsv = 
    `head1, head2
value1, value2`;
    const testJson = 
    `[
        {
            "head1": "value1",
            "head2": "value2"
        }
    ]
    `;
    expect(j2c(testJson.trim()).trim()).toBe(expectedCsv.trim())
});

test("json object should produce correct csv", () => {
    const expectedCsv = 
    `names, ages
vic, 20
tor, 30
abel, 32
champ, 17`;
    const testJson = 
    `{
        "names": [
            "vic", "tor", "abel", "champ"
        ],
        "ages": [20, 30, 32, 17]
    }
    `;
    expect(j2c(testJson.trim()).trim()).toBe(expectedCsv.trim())
});