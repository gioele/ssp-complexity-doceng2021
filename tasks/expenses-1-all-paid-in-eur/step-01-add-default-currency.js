const { xml } = require("../common/input-data")

function addDefaultCurrency(xml) {
    for (let elem of xml.getElementsByTagName("*")) {
        if (elem.tagName === "expense" && !elem.hasAttribute("currency")) {
            elem.setAttribute("currency", "EUR")
        }
    }
    return xml
}

const result = addDefaultCurrency(xml)
console.log(result.outerHTML)
