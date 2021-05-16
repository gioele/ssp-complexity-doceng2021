const { xml } = require("../common/input-data")
const { outputResult } = require("../common/utils")

function getTokenCount(xml) {
    const childNodes = xml.childNodes

    /* //text()/tokenize(.)[not(starts-with(., '-'))] */

    // step: //text()
    const textNodes = []
    for (let node of childNodes) {
        if (node.nodeType === 3) {
            textNodes.push(node)
        }
    }

    // step: tokenize(.)
    const tokensPerLine = []
    for (let textNode of textNodes) {
        const normalized = textNode.textContent.replace(/(^|\s)\s+/, "")
        const tokens = normalized.split(" ")
        tokensPerLine.push(tokens)
    }
    //
    // // [not(starts-with(., '-'))]
    // const distinctTokensPerLine = []
    // for (let tokens of tokensPerLine) {
    //     const distinctTokens = []
    //     for (let token of tokens) {
    //         if (!token.startsWith("-")) {
    //             distinctTokens.push(token)
    //         }
    //     }
    //     distinctTokensPerLine.push(distinctTokens)
    // }
    //
    // // count(.)
    // const distinctTokenCountsPerLine = []
    // for (let distinctTokens of distinctTokensPerLine) {
    //     distinctTokenCountsPerLine.push(distinctTokens.length)
    // }

    const tokenCountPerLine = []
    for (let tokens of tokensPerLine) {
        tokenCountPerLine.push(tokens.length)
    }

    return tokenCountPerLine.reduce((sum, count) => sum + count, 0)
}

exports.fn = getTokenCount

const result = getTokenCount(xml)
outputResult(module, result)
