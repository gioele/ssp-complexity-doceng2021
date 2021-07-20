const { xml, precedingNodes, followingNodes } = require("../common/input-data")
const { outputResult } = require("../common/utils")

function joinWords(xml) {

    // As we are mutating the document, we cannot delete nodes directly as this would
    // change the results. By storing nodes to to modify intermediately and then modifying
    // them at the end, equivalent complexity to the XSL version is retained.
    const nodesToRemove = new Set()
    const nodesToReplace = new Map()

    for (let elem of xml.getElementsByTagName("line")) {
            for (let child of elem.getElementsByTagName("w")) {
                // 1 - mark broken word ends for deletion

                const word = child.textContent
                const precedingWordElem = precedingNodes(child, "w")[0]

                const precedingWord = precedingWordElem?.textContent

                if (precedingWord?.endsWith("-")) {
                    nodesToRemove.add(child)

                } else if (word.endsWith("-")) {

                    // 2 - Join broken word starts with ends

                    const normalizedWordPart = word.replace("-", "")

                    const followingWordElem = followingNodes(child, "w")[0]
                    if (followingWordElem) {
                        const followingWord = followingWordElem.textContent
                        const joinedWord = normalizedWordPart + followingWord
                        nodesToReplace.set(child, joinedWord)
                    }
                }
            }
    }

    // apply modifications
    nodesToReplace.forEach((node, newText) => node.textContent = newText)
    nodesToRemove.forEach(node => node.remove())

    return xml
}

exports.fn = joinWords

const result = joinWords(xml)
outputResult(module, result.outerHTML)
