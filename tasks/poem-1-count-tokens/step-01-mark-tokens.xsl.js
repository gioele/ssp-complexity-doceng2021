const { xml } = require("../common/input-data")
const { outputResult } = require("../common/utils")

function getTokenCount(xml) {
    const document = xml.getRootNode()
    const childNodes = xml.childNodes

    // step: //text()
    const textNodes = []
    for (let node of childNodes) {
        if (node.nodeType === 3) {
            textNodes.push(node)
        }
    }

    // step: tokenize(.)
    for (let textNode of textNodes) {
        const normalized = textNode.textContent.replace(/(^|\s)\s+/, "")
        const tokens = normalized.split(" ")
        for (let token of tokens) {
            const tokenElem = document.createElement("token")
            tokenElem.textContent = token
            textNode.parentNode.insertBefore(tokenElem, textNode)
        }
        textNode.remove()
    }

    return xml
}

exports.fn = getTokenCount

const result = getTokenCount(xml)
outputResult(module, result.outerHTML)
