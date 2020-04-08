function addDots(str, n) {
    let newstr = str
    if (n < newstr.length) {
        newstr = newstr.substring(0, n - 1) + "…"
    }
    return newstr
}

module.exports = addDots