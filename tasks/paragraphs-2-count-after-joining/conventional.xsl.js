const { xml, precedingNodes, followingNodes } = require("../common/input-data")
const { outputResult } = require("../common/utils")

function countLongWords(xml) {
    const longWordCountPerLine = []

    for (let elem of xml.getElementsByTagName("*")) {
        if (elem.tagName === "line") {
            let longWords = []
            for (let child of elem.childNodes) {
                if (child.tagName === "w") {
                    let wordLength = 0
                    const word = child.textContent

                    // if (preceding::w[1]/ends-with(., '-'))
                    const preceding = precedingNodes(child)
                    let precedingWordElem = null

                    for (let precedingNode of preceding.reverse()) {
                        if (precedingNode.tagName === "w") {
                            precedingWordElem = precedingNode
                            break
                        }
                    }

                    const precedingWord = precedingWordElem?.textContent
                    if (precedingWord?.endsWith("-")) {
                        wordLength = 0

                    } else if (word.endsWith("-")) {
                        // if (ends-with(., '-'))
                        let followingWordLength = 0
                        const following = followingNodes(child)
                        for (let followingNode of following) {
                            if (followingNode.tagName === "w") {
                                const followingWord = followingNode.textContent
                                followingWordLength = followingWord.length
                                break
                            }
                        }

                        wordLength = (word.length - 1) + followingWordLength
                    } else {
                        // else
                        wordLength = word.length
                    }

                    if (wordLength > 2) {
                        longWords.push(word)
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
