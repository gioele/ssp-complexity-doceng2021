const { xml } = require("../common/input-data")
const { outputResult } = require("../common/utils")

function calculateLength(xml) {
    for (let elem of xml.getElementsByTagName("w")) {
        const word = elem.textContent
        elem.setAttribute("length", word.length)
    }

    return xml
}

exports.fn = calculateLength

const result = calculateLength(xml)
outputResult(module, result.outerHTML)
