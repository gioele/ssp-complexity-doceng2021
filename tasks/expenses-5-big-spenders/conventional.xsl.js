const { xml } = require("../common/input-data")
const { outputResult } = require("../common/utils")

function getBigSpenders(xml) {
    const exchangeRate = 0.9
    let bigSpenderIDs = []
    for (let elem of xml.getElementsByTagName("*")) {
        if (elem.tagName === "expense") {
            let value = 0
            for (let attr of elem.attributes) {
                if (attr.name === "value") {
                    value = parseFloat(attr.value)
                }
            }

            let currency = null
            for (let attr of elem.attributes) {
                if (attr.name === "currency") {
                    currency = attr.value.toUpperCase()
                }
            }


            let valueInEur;

            if (!currency || currency === "EUR")
            {
                valueInEur = value
            } else {
                valueInEur = exchangeRate
            }

            if (valueInEur >= 100) {
                for (let attr of elem.attributes) {
                    if (attr.name === "person") {
                        bigSpenderIDs.push(attr.value)
                    }
                }
            }
        }
    }

    const bigSpenderNames = []
    for (let elem of xml.getElementsByTagName("*")) {
        if (elem.tagName === "person") {
            let spenderId = null
            for (let attr of elem.attributes) {
                if (attr.name === "id") {
                    spenderId = attr.value
                }
            }

            if (bigSpenderIDs.includes(spenderId)) {
                for (let attr of elem.attributes) {
                    if (attr.name === "name") {
                        bigSpenderNames.push(attr.value)
                    }
                }
            }
        }
    }

    const bigSpenderList = bigSpenderNames.join("; ")
    return bigSpenderList
}

exports.fn = getBigSpenders

const result = getBigSpenders(xml)
outputResult(module, result)
