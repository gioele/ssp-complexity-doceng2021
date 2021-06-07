const fs = require("fs")
const { JSDOM } = require("jsdom")

function xPathResultToNodeArray(xPathResult) {
    const nodes = [];
    let node = xPathResult.iterateNext();
    while (node) {
        nodes.push(node);
        node = xPathResult.iterateNext();
    }

    return nodes
}

function parseXML(xml_string) {
    const { window } = new JSDOM("<html/>")
    const parser = new window.DOMParser()
    const doc = parser.parseFromString(xml_string, "text/xml")
    return {window, doc}
}

const args = process.argv.slice(2)
let data_file = args[0]

if (data_file === "-") {
    data_file = 0 // stdin
}
const data = fs.readFileSync(data_file, "utf8").toString()
const result = parseXML(data)

exports.data = data
exports.xml = result.doc.documentElement
exports.doc = result.doc
exports.precedingNodes = function(node, name) {
    const xPathResult = result.doc.evaluate(`./preceding::${name}`, node, null, result.window.XPathResult.ORDERED_NODE_ITERATOR_TYPE)
    return xPathResultToNodeArray(xPathResult).reverse()
}
exports.followingNodes = function(node, name) {
    const xPathResult =  result.doc.evaluate(`./following::${name}`, node, null, result.window.XPathResult.ORDERED_NODE_ITERATOR_TYPE)
    return xPathResultToNodeArray(xPathResult)
}
