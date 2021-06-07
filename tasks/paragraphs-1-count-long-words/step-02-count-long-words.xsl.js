const { xml } = require("../common/input-data")
const { outputResult } = require("../common/utils")

function countLongWords(xml) {
    const longWordCountPerLine = []

    for (let elem of xml.getElementsByTagName("*")) {
        if (elem.tagName === "line") {
            let longWords = []
            for (let child of elem.childNodes) {
                if (child.tagName === "w") {
                    const length = parseInt(child.getAttribute("length"))
                    if (length > 2) {
                        longWords.push(child.textContent)

                    }
                }
            }

            longWordCountPerLine.push(longWords.length)
        }
    }

    return longWordCountPerLine.join("; ")

}

exports.fn = countLongWords

const result = countLongWords(xml)
outputResult(module, result)
