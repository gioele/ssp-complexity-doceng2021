const { xml } = require("../common/input-data")
const { outputResult } = require("../common/utils")

function sumOfEurExpenses(xml) {
    let sum = 0
    for (let elem of xml.getElementsByTagName("expense")) {
        if (!elem.hasAttribute("currency") ||
            elem.getAttribute("currency").toUpperCase() === "EUR") {
            const value = parseFloat(elem.getAttribute("value"))
            sum += value
        }
    }
    return sum
}

exports.fn = sumOfEurExpenses

const result = sumOfEurExpenses(xml)
outputResult(module, result)
