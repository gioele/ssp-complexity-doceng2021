const { xml } = require("../common/input-data")
const { outputResult } = require("../common/utils")

function sumOfAllExpenses(xml) {
    const exchangeRate = 0.9
    let sum = 0
    for (let elem of xml.getElementsByTagName("*")) {
        if (elem.tagName === "expense") {
            let value = 0
            for (let attr of elem.attributes) {
                if (attr.name === "value") {
                    value = parseFloat(attr.value)
                }
            }

            let currency = null
            for (let attr of elem.attributes) {
                if (attr.name === "currency") {
                    currency = attr.value.toUpperCase()
                }
            }

            if (!currency || currency === "EUR")
            {
                sum += value
            } else {
                sum += value * exchangeRate
            }
        }
    }
    return sum
}

exports.fn = sumOfAllExpenses

const result = sumOfAllExpenses(xml)
outputResult(module, result)
