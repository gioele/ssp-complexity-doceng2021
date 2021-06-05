const { xml } = require("../common/input-data")
const { outputResult } = require("../common/utils")

function addEurValueAttrForEurExpenses(xml) {
    for (let elem of xml.getElementsByTagName("*")) {
        if (elem.tagName === "expense") {
            let currency = null
            for (let attr of elem.attributes) {
                if (attr.name === "currency") {
                    currency = attr.value
                }
            }

            if (currency === "EUR") {
                for (let attr of elem.attributes) {
                    if (attr.name === "value") {
                        let value = parseFloat(attr.value)
                        elem.setAttribute("value-in-eur", value)

                    }
                }
            }
        }
    }

    return xml
}

exports.fn = addEurValueAttrForEurExpenses

const result = addEurValueAttrForEurExpenses(xml)
outputResult(module, result.outerHTML)
