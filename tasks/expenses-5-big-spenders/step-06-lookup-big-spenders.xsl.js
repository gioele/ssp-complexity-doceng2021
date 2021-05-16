const { xml } = require("../common/input-data")
const { outputResult } = require("../common/utils")

function selectAllPaidInEur(xml) {
    const bigSpenderIDs = []
    for (let elem of xml.getElementsByTagName("*")) {
        const spenderId = elem.getAttribute("person")
        bigSpenderIDs.push(spenderId)
    }

    const bigSpenderNames = []
    for (let elem of xml.getElementsByTagName("*")) {
        if (elem.tagName === "person") {
            const spenderId = elem.getAttribute("id")
            if (bigSpenderIDs.includes(spenderId)) {
                const spenderName = elem.getAttribute("name")
                bigSpenderNames.push(spenderName)
            }
        }
    }

    const bigSpenderList = bigSpenderNames.join("; ")
    return bigSpenderList
}

exports.fn = selectAllPaidInEur

const result = selectAllPaidInEur(xml)
outputResult(module, result)