const { xml } = require("../common/input-data")
const { outputResult } = require("../common/utils")

function addEurValueAttrForEurExpenses(xml) {
    for (let elem of xml.getElementsByTagName("expense")) {
        if (elem.getAttribute("currency") === "EUR") {
            const value = elem.getAttribute("value")
            elem.setAttribute("value-in-eur", value)
        }
    }

    return xml
}

exports.fn = addEurValueAttrForEurExpenses

const result = addEurValueAttrForEurExpenses(xml)
outputResult(module, result.outerHTML)
