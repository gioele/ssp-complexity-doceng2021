const { xml } = require("../common/input-data")
const { outputResult } = require("../common/utils")

function lookupBigSpenders(xml) {
    const bigSpenderIDs = []
    for (let elem of xml.getElementsByTagName("*")) {
        for (let attr of elem.attributes) {
            if (attr.name === "person") {
                bigSpenderIDs.push(attr.value)
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

exports.fn = lookupBigSpenders

const result = lookupBigSpenders(xml)
outputResult(module, result)
