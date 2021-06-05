const { xml } = require("../common/input-data")
const { outputResult } = require("../common/utils")

function countLongWords(xml) {
    const lineNumbersStartingWithVowel = []

    for (let elem of xml.getElementsByTagName("*")) {
        if (elem.tagName === "line") {
            for (let attr of elem.attributes) {
                if (attr.name === "starts-with-vowel") {
                    if (attr.value === "true") {

                        for (let attr of elem.attributes) {
                            if (attr.name === "n") {
                                lineNumbersStartingWithVowel.push(attr.value)
                                break
                            }
                        }

                    }

                    break
                }
            }

        }
    }

    return lineNumbersStartingWithVowel.join("; ")

}

exports.fn = countLongWords

const result = countLongWords(xml)
outputResult(module, result)