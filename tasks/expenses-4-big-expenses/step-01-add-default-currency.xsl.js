const { xml } = require("../common/input-data")
const { outputResult } = require("../common/utils")

function addDefaultCurrency(xml) {
    for (let elem of xml.getElementsByTagName("*")) {
        if (!elem.hasAttribute("currency")) {
            elem.setAttribute("currency", "EUR")
        }
    }
    return xml
}

exports.fn = addDefaultCurrency

const result = addDefaultCurrency(xml)
outputResult(module, result.outerHTML)
