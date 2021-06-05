const { xml } = require("../common/input-data")
const { outputResult } = require("../common/utils")

function addDefaultCurrency(xml) {
    for (let elem of xml.getElementsByTagName("*")) {
        let hasCurrency = false
        for (let attr of elem.attributes) {
            if (attr.name === "currency") {
                hasCurrency = true
            }
        }
        if (!hasCurrency) {
            elem.setAttribute("currency", "EUR")
        }
    }
    return xml
}

exports.fn = addDefaultCurrency

const result = addDefaultCurrency(xml)
outputResult(module, result.outerHTML)
