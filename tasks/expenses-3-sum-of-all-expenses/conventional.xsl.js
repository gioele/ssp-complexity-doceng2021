const { xml } = require("../common/input-data")
const { outputResult } = require("../common/utils")

function sumOfAllExpenses(xml) {
    const exchangeRate = 0.9
    let sum = 0
    for (let elem of xml.getElementsByTagName("expense")) {
        const value = parseInt(elem.getAttribute("value"))

        if (!elem.hasAttribute("currency") ||
            elem.getAttribute("currency").toUpperCase() === "EUR") {
            sum += value
        } else {
            sum += value * exchangeRate
        }
    }
    return sum
}

exports.fn = sumOfAllExpenses

const result = sumOfAllExpenses(xml)
outputResult(module, result)
