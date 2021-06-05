const { xml } = require("../common/input-data")
const { outputResult } = require("../common/utils")

function allPaidInEur(xml) {
    const matched = []
    for (let elem of xml.getElementsByTagName("*")) {
        if (elem.tagName === "expense") {
            let currency = null
            for (let attr of elem.attributes) {
                if (attr.name === "currency") {
                    currency = attr.value.toUpperCase()
                }
            }

            if (!currency || currency === "EUR")
            {
                for (let attr of elem.attributes) {
                    if (attr.name === "id") {
                        matched.push(attr.value)
                    }
                }
            }
        }
    }
    const matched_list = matched.join("; ")
    return matched_list
}

exports.fn = allPaidInEur

const result = allPaidInEur(xml)
outputResult(module, result)
