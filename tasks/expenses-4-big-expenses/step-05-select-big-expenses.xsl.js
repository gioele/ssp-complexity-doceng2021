const { xml } = require("../common/input-data")
const { outputResult } = require("../common/utils")

function selectAllPaidInEur(xml) {
    const matched_ids = []
    for (let elem of xml.getElementsByTagName("*")) {
        if (elem.tagName === "expense") {
            let value = 0
            for (let attr of elem.attributes) {
                if (attr.name === "value-in-eur") {
                    value = parseFloat(attr.value)
                }
            }

            if (value >= 100) {
                for (let attr of elem.attributes) {
                    if (attr.name === "id") {
                        const id = elem.getAttribute("id")
                        matched_ids.push(id)
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
