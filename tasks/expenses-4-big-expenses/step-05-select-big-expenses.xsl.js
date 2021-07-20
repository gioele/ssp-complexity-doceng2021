const { xml } = require("../common/input-data")
const { outputResult } = require("../common/utils")

function selectBigExpenses(xml) {
    const matched_ids = []
    for (let elem of xml.getElementsByTagName("expense")) {
        const value = elem.getAttribute("value-in-eur")
        if (value >= 100) {
            const id = elem.getAttribute("id")
            matched_ids.push(id)
        }
    }

    const matched_ids_list = matched_ids.join("; ")

    return matched_ids_list
}

exports.fn = selectBigExpenses

const result = selectBigExpenses(xml)
outputResult(module, result)
