const { xml, precedingNodes, followingNodes } = require("../common/input-data")
const { outputResult } = require("../common/utils")

function linesStartWithVowel(xml) {
    const lineNumbersStartingWithVowel = []

    for (let elem of xml.getElementsByTagName("line")) {
            const fullWords = []

        for (let child of elem.getElementsByTagName("w")) {
            let word = child.textContent
            let precedingWordElem = precedingNodes(child, "w")[0]

            const precedingWord = precedingWordElem?.textContent
            if (precedingWord?.endsWith("-")) {
                // noop
            } else if (word.endsWith("-")) {
                const followingWordElem = followingNodes(child, "w")[0]
                const followingWord = followingWordElem?.textContent || ""

                const normalizedStart = word.replace("-", "")
                const joinedWord = normalizedStart + followingWord

                fullWords.push(joinedWord)
            } else {
                fullWords.push(word)
            }
        }
            const lineText = fullWords.join(" ")
            if (["a", "e", "i", "o", "u"].includes(lineText.substring(0, 1))) {
                const lineNo = elem.getAttribute("n")
                lineNumbersStartingWithVowel.push(lineNo)
            }
    }

    return lineNumbersStartingWithVowel.join("; ")
}

exports.fn = linesStartWithVowel

const result = linesStartWithVowel(xml)
outputResult(module, result)
