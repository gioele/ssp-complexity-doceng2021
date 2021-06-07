const { xml, precedingNodes, followingNodes } = require("../common/input-data")
const { outputResult } = require("../common/utils")

function countLongWords(xml) {
    const longWordCountPerLine = []

    for (let elem of xml.getElementsByTagName("line")) {
            let longWords = []
            for (let child of elem.getElementsByTagName("w")) {
                    let wordLength = 0
                    const word = child.textContent

                    // if (preceding::w[1]/ends-with(., '-'))
                    let precedingWordElem = precedingNodes(child, "w")[0]

                    const precedingWord = precedingWordElem?.textContent
                    if (precedingWord?.endsWith("-")) {
                        wordLength = 0

                    } else if (word.endsWith("-")) {
                        const followingWordElem = followingNodes(child, "w")[0]
                        const followingWord = followingWordElem.textContent
                        const followingWordLength = followingWord?.length || 0

                        wordLength = (word.length - 1) + followingWordLength
                    } else {
                        // else
                        wordLength = word.length
                    }

                    if (wordLength > 2) {
                        longWords.push(word)
                    }
            }

            longWordCountPerLine.push(longWords.length)
    }

    return longWordCountPerLine.join("; ")

}

exports.fn = countLongWords

const result = countLongWords(xml)
outputResult(module, result)
