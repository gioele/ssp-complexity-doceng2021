const { xml, precedingNodes, followingNodes } = require("../common/input-data")
const { outputResult } = require("../common/utils")

function linesStartWithVowel(xml) {
    const lineNumbersStartingWithVowel = []

    for (let elem of xml.getElementsByTagName("*")) {
        if (elem.tagName === "line") {
            const fullWords = []

            for (let child of elem.childNodes) {
                if (child.tagName === "w") {
                    let word = child.textContent


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
                        // noop
                    } else if (word.endsWith("-")) {
                        let followingWord = ""
                        const following = followingNodes(child)
                        for (let followingNode of following) {
                            if (followingNode.tagName === "w") {
                                followingWord = followingNode.textContent
                                break
                            }
                        }

                        const normalizedStart = word.replace("-", "")
                        const joinedWord = normalizedStart + followingWord

                        fullWords.push(joinedWord)
                    } else {
                        fullWords.push(word)
                    }
                }
            }
            const lineText = fullWords.join(" ")
            if (["a", "e", "i", "o", "u"].includes(lineText.substring(0, 1))) {
                const lineNo = elem.getAttribute("n")
                lineNumbersStartingWithVowel.push(lineNo)
            }
        }
    }

    return lineNumbersStartingWithVowel.join("; ")
}

exports.fn = linesStartWithVowel

const result = linesStartWithVowel(xml)
outputResult(module, result)
