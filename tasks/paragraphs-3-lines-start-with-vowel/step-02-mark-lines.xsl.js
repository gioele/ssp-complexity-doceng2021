const { xml } = require("../common/input-data")
const { outputResult } = require("../common/utils")

function calculateLength(xml) {
    for (let elem of xml.getElementsByTagName("*")) {
        if (elem.tagName === "line") {
            for (let child of elem.childNodes) {

                if (child.tagName === "w") {
                    const firstChar = child.textContent.substring(0, 1)
                    const isVowel = ["a", "e", "i", "o", "u"].includes(firstChar)

                    if (isVowel) {
                        elem.setAttribute("starts-with-vowel", isVowel)
                    }

                    break
                }
            }

        }
    }

    return xml
}

exports.fn = calculateLength

const result = calculateLength(xml)
outputResult(module, result.outerHTML)
