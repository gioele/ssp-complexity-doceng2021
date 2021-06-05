const { xml } = require("../common/input-data")
const { outputResult } = require("../common/utils")

function selectAllPaidInEur(xml) {
    let sum = 0
    for (let elem of xml.getElementsByTagName("*")) {
        if (elem.tagName === "expense") {
            let value = 0
            for (let attr of elem.attributes) {
                if (attr.name === "value-in-eur") {
                    value = parseFloat(attr.value)
                }
            }

            sum += value
        }
    }

    return sum
}

exports.fn = selectAllPaidInEur

const result = selectAllPaidInEur(xml)
outputResult(module, result)
