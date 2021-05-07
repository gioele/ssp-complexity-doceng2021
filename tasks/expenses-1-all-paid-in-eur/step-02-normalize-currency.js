const { xml } = require("../common/input-data")

function normalizeCurrency(xml) {
    for (let elem of xml.getElementsByTagName("*")) {
        if (elem.tagName === "expense") {
            const currency = elem.getAttribute("currency")
            const currency_normalized = currency.toUpperCase()
            elem.setAttribute("currency", currency_normalized)
        }
    }
    return xml
}

const result = normalizeCurrency(xml)
console.log(result.outerHTML)
