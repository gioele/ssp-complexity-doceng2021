const { xml } = require("../common/input-data")
const { outputResult } = require("../common/utils")

function selectAllPaidInEur(xml) {
    const exchangeRate = 0.9

    for (let elem of xml.getElementsByTagName("*")) {
        if (elem.tagName === "expense") {
            if (elem.getAttribute("currency") !== "EUR") {
                const value = parseFloat(elem.getAttribute("value"))
                const eurValue  = value * exchangeRate
                elem.setAttribute("value-in-eur", eurValue)
            }
        }
    }

    return xml
}

exports.fn = selectAllPaidInEur

const result = selectAllPaidInEur(xml)
outputResult(module, result.outerHTML)
