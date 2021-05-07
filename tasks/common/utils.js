function outputIfRunAsScript(text) {
    if (require.main !== module) { return }

    console.log(text)
}

exports.outputResult = outputIfRunAsScript
