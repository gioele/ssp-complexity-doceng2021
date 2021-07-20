const { xml } = require("../common/input-data")
const { outputResult } = require("../common/utils")

function lookupBigSpenders(xml) {
    const bigSpenderIDs = []
    for (let elem of xml.getElementsByTagName("expense")) {
        const spenderId = elem.getAttribute("person")
        bigSpenderIDs.push(spenderId)
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

exports.fn = lookupBigSpenders

const result = lookupBigSpenders(xml)
outputResult(module, result)
