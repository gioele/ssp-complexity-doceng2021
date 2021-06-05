const { xml } = require("../common/input-data")
const { outputResult } = require("../common/utils")

function normalizeCurrency(xml) {
    for (let elem of xml.getElementsByTagName("*")) {
        if (elem.tagName === "expense") {
            let currency_normalized = null
            for (let attr of elem.attributes) {
                if (attr.name === "currency") {
                    currency_normalized = attr.value.toUpperCase()
                }
            }

            elem.setAttribute("currency", currency_normalized)
        }
    }
    return xml
}

exports.fn = normalizeCurrency

const result = normalizeCurrency(xml)
outputResult(module, result.outerHTML)
