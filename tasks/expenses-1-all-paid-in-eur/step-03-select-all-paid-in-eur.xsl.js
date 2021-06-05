const { xml } = require("../common/input-data")
const { outputResult } = require("../common/utils")

function selectAllPaidInEur(xml) {
    const matched_ids = []
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
                    if (attr.name === "id") {
                        matched_ids.push(attr.value)
                    }
                }
            }
        }
    }

    const matched_ids_list = matched_ids.join("; ")

    return matched_ids_list
}

exports.fn = selectAllPaidInEur

const result = selectAllPaidInEur(xml)
outputResult(module, result)
