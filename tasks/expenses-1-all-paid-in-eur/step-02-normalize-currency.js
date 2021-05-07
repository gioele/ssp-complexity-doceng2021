const { xml } = require("../common/input-data")
const { outputResult } = require("../common/utils")

function normalizeCurrency(xml) {
    for (let elem of xml.getElementsByTagName("*")) {
        if (elem.tagName === "expense") {
            const currency = elem.getAttribute("currency")
            const currency_normalized = currency.toUpperCase()
            elem.setAttribute("currency", currency_normalized)
        }
    }
    return xml
}

exports.fn = normalizeCurrency

const result = normalizeCurrency(xml)
outputResult(module, result.outerHTML)
