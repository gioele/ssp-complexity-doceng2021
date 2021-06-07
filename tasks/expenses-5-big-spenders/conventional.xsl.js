const {xml} = require("../common/input-data")
const {outputResult} = require("../common/utils")

function getBigSpenders(xml) {
    const exchangeRate = 0.9
    let bigSpenderIDs = []
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
            const spenderId = elem.getAttribute("person")
            bigSpenderIDs.push(spenderId)
        }
    }

    const bigSpenderNames = []
    for (let elem of xml.getElementsByTagName("person")) {
        const spenderId = elem.getAttribute("id")
        if (bigSpenderIDs.includes(spenderId)) {
            const spenderName = elem.getAttribute("name")
            bigSpenderNames.push(spenderName)
        }
    }

    const bigSpenderList = bigSpenderNames.join("; ")
    return bigSpenderList
}

exports.fn = getBigSpenders

const result = getBigSpenders(xml)
outputResult(module, result)
