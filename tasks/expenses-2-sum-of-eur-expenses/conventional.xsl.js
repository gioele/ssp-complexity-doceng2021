const { xml } = require("../common/input-data")
const { outputResult } = require("../common/utils")

function sumOfEurExpenses(xml) {
    let sum = 0
    for (let elem of xml.getElementsByTagName("*")) {
        if (elem.tagName === "expense") {
            let currency = null
            for (let attr of elem.attributes) {
                if (attr.name === "currency") {
                    currency = attr.value.toUpperCase()
                }
            }

            if (!currency || currency === "EUR")
            {
                const value = parseFloat(elem.getAttribute("value"))
                sum += value
            }
        }
    }
    return sum
}

exports.fn = sumOfEurExpenses

const result = sumOfEurExpenses(xml)
outputResult(module, result)
