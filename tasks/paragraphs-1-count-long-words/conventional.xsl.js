const { xml } = require("../common/input-data")
const { outputResult } = require("../common/utils")

function countLongWords(xml) {
    const longWordCountPerLine = []

    for (let elem of xml.getElementsByTagName("line")) {
        let longWords = []
        for (let child of elem.getElementsByTagName("w")) {
            const normalizedWord = child.textContent.replace("-", "")
            if (normalizedWord.length > 2) {
                longWords.push(child)
            }
        }

        longWordCountPerLine.push(longWords.length)
    }

    return longWordCountPerLine.join("; ")

}

exports.fn = countLongWords

const result = countLongWords(xml)
outputResult(module, result)
