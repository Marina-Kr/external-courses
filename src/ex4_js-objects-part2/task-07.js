function addDots(str, n) {
    let result = str
    if (n < result.length) {
        result = result.substring(0, n - 1) + "…"
    }
    return result
}

module.exports = addDots