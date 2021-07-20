const { xml } = require("../common/input-data")
const { outputResult } = require("../common/utils")

function reportLines(xml) {
    const lineNumbersStartingWithVowel = []

    for (let elem of xml.getElementsByTagName("line")) {
        const startsWithVowel = elem.getAttribute("starts-with-vowel")
        if (startsWithVowel === "true") {
            const lineNo = elem.getAttribute("n")
            lineNumbersStartingWithVowel.push(lineNo)
        }
    }

    return lineNumbersStartingWithVowel.join("; ")

}

exports.fn = reportLines

const result = reportLines(xml)
outputResult(module, result)
