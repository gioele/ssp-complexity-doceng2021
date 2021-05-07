const fs = require("fs")
const { JSDOM } = require("jsdom")

function parseXML(xml_string) {
    const { window } = new JSDOM("<html/>")
    const parser = new window.DOMParser()
    const doc = parser.parseFromString(xml_string, "text/xml")
    const root = doc.documentElement
    return root
}

const args = process.argv.slice(2)
let data_file = args[0]

if (data_file === "-") {
    data_file = 0 // stdin
}
const data = fs.readFileSync(data_file, "utf8").toString()
const xml = parseXML(data)

exports.data = data
exports.xml = xml