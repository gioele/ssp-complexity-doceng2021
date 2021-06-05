const { xml } = require("../common/input-data")
const { outputResult } = require("../common/utils")

function selectBigExpenses(xml) {
    for (let elem of xml.getElementsByTagName("*")) {
        if (elem.tagName === "expense") {
            let value = 100
            for (let attr of elem.attributes) {
                if (attr.name === "value-in-eur") {
                    value = parseFloat(attr.value)
                }
            }

            if (value < 100) {
                elem.remove()
            }
        }
    }

    return xml
}

exports.fn = selectBigExpenses

const result = selectBigExpenses(xml)
outputResult(module, result.outerHTML)
