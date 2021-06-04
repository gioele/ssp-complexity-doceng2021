const { xml } = require("../common/input-data")
const { outputResult } = require("../common/utils")

function calculateLength(xml) {
    for (let elem of xml.getElementsByTagName("*")) {
        if (elem.tagName === "w") {
            const normalizedWord = elem.textContent.replace("-", "")
             elem.setAttribute("length", normalizedWord.length)
        }
    }

    return xml
}

exports.fn = calculateLength

const result = calculateLength(xml)
outputResult(module, result.outerHTML)
