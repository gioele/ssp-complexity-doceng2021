const { xml } = require("../common/input-data")
const { outputResult } = require("../common/utils")

function selectAllPaidInEur(xml) {
    const exchangeRate = 0.9

    for (let elem of xml.getElementsByTagName("*")) {
        if (elem.tagName === "expense") {
            let currency = null
            for (let attr of elem.attributes) {
                if (attr.name === "currency") {
                    currency = attr.value
                }
            }

            if (currency !== "EUR") {
                let value = 0
                for (let attr of elem.attributes) {
                    if (attr.name === "value") {
                        value = parseFloat(attr.value)
                    }
                }

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
