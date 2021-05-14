const { xml } = require("../common/input-data")
const { outputResult } = require("../common/utils")

function selectAllPaidInEur(xml) {
    for (let elem of xml.getElementsByTagName("*")) {
        if (elem.tagName === "expense") {
            if (elem.getAttribute("currency") === "EUR") {
                const value = elem.getAttribute("value")
                elem.setAttribute("value-in-eur", value)
            }
        }
    }

    return xml
}

exports.fn = selectAllPaidInEur

const result = selectAllPaidInEur(xml)
outputResult(module, result.outerHTML)
