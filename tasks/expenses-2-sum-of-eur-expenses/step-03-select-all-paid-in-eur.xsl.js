const { xml } = require("../common/input-data")
const { outputResult } = require("../common/utils")

function selectAllPaidInEur(xml) {
    for (let elem of xml.getElementsByTagName("*")) {
        if (elem.tagName === "expense") {
            let currency = null
            for (let attr of elem.attributes) {
                if (attr.name === "currency") {
                    currency = attr.value
                    if (currency !== "EUR") {
                        elem.remove()
                    }
                }
            }
        }
    }

    return xml
}

exports.fn = selectAllPaidInEur

const result = selectAllPaidInEur(xml)
outputResult(module, result.outerHTML)
