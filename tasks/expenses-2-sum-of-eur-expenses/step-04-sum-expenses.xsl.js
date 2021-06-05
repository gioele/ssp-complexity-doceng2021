const { xml } = require("../common/input-data")
const { outputResult } = require("../common/utils")

function sumExpenses(xml) {
    let sum = 0
    for (let elem of xml.getElementsByTagName("*")) {
        if (elem.tagName === "expense") {
            let value = 0
            for (let attr of elem.attributes) {
                if (attr.name === "value") {
                    value = parseFloat(attr.value)
                }
            }
            sum += value
        }
    }

    return sum
}

exports.fn = sumExpenses

const result = sumExpenses(xml)
outputResult(module, result)
