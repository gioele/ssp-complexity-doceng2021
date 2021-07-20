function outputIfRunAsScript(m, text) {
    if (require.main !== m) { return }
    console.log(text)
}

exports.outputResult = outputIfRunAsScript
