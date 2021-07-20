const { xml } = require("../common/input-data")
const { outputResult } = require("../common/utils")

function countTokens(xml) {
   let numTokens = 0

    for (let elem of xml.getElementsByTagName("*")) {
       if (elem.tagName === "token") {
           numTokens++
       }
    }

    return numTokens
}

exports.fn = countTokens

const result = countTokens(xml)
outputResult(module, result)
