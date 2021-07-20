const { xml } = require("../common/input-data")
const { outputResult } = require("../common/utils")

function selectBigExpenses(xml) {
    for (let elem of xml.getElementsByTagName("expense")) {
        const value = elem.getAttribute("value-in-eur")
        if (value < 100) {
            elem.remove()
        }
    }

    return xml
}

exports.fn = selectBigExpenses

const result = selectBigExpenses(xml)
outputResult(module, result.outerHTML)
