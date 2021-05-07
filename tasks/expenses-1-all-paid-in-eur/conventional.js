const { xml } = require("../common/input-data")

function allPaidInEur(xml) {
    const matched = []
    for (let elem of xml.getElementsByTagName("*")) {
        if (elem.tagName === "expense") {
            if (!elem.hasAttribute("currency") ||
                elem.getAttribute("currency").toUpperCase() === "EUR")
            {
                const id = elem.getAttribute("id")
                matched.push(id)
            }
        }
    }
    const matched_list = matched.join("; ")
    return matched_list
}

const result = allPaidInEur(xml)
console.log(result)