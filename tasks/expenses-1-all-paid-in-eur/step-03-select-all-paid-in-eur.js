const { xml } = require("../common/input-data")

function selectAllPaidInEur(xml) {
    const matched_ids = []
    for (let elem of xml.getElementsByTagName("*")) {
        if (elem.tagName === "expense") {
            if (elem.getAttribute("currency") === "EUR") {
                const id = elem.getAttribute("id")
                matched_ids.push(id)
            }
        }
    }

    const matched_ids_list = matched_ids.join("; ")

    return matched_ids_list
}

const result = selectAllPaidInEur(xml)
console.log(result)
