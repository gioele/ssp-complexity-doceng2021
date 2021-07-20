const { xml } = require("../common/input-data")
const { outputResult } = require("../common/utils")

function selectBigExpenses(xml) {
    const exchangeRate = 0.9
    let matched = []
    for (let elem of xml.getElementsByTagName("expense")) {
        const value = parseInt(elem.getAttribute("value"))
        let valueInEur;

        if (!elem.hasAttribute("currency") ||
            elem.getAttribute("currency").toUpperCase() === "EUR") {
            valueInEur = value
        } else {
            valueInEur = exchangeRate
        }

        if (valueInEur >= 100) {
            const expenseId = elem.getAttribute("id")
            matched.push(expenseId)
        }
    }

    const matched_list = matched.join("; ")
    return matched_list
}

exports.fn = selectBigExpenses

const result = selectBigExpenses(xml)
outputResult(module, result)
