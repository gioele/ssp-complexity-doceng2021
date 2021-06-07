const { xml } = require("../common/input-data")
const { outputResult } = require("../common/utils")

function sumExpenses(xml) {
    let sum = 0
    for (let elem of xml.getElementsByTagName("expense")) {
        const value = parseFloat(elem.getAttribute("value-in-eur"))
        sum += value
    }

    return sum
}

exports.fn = sumExpenses

const result = sumExpenses(xml)
outputResult(module, result)
