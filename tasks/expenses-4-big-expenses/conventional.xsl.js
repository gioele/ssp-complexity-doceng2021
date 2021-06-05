const { xml } = require("../common/input-data")
const { outputResult } = require("../common/utils")

function selectBigExpenses(xml) {
    const exchangeRate = 0.9
    let matched = []
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


            let valueInEur;

            if (!currency || currency === "EUR")
            {
                valueInEur = value
            } else {
                valueInEur = exchangeRate
            }

            if (valueInEur >= 100) {
                for (let attr of elem.attributes) {
                    if (attr.name === "id") {
                        matched.push(attr.value)
                    }
                }
            }
        }
    }

    const matched_list = matched.join("; ")
    return matched_list
}

exports.fn = selectBigExpenses

const result = selectBigExpenses(xml)
outputResult(module, result)
