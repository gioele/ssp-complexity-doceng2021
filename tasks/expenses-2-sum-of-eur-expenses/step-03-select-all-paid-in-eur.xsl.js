const { xml } = require("../common/input-data")
const { outputResult } = require("../common/utils")

function selectAllPaidInEur(xml) {
    for (let elem of xml.getElementsByTagName("expense")) {
        if (elem.getAttribute("currency") !== "EUR") {
            elem.remove()
        }
    }

    return xml
}

exports.fn = selectAllPaidInEur

const result = selectAllPaidInEur(xml)
outputResult(module, result.outerHTML)
