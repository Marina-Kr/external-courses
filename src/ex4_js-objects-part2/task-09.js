function insertString(str1, str2, pos) {
    let searchPos = 0;
    let newPos = pos + 1
    let result = str1 + " "
    for (let i = 0; i < result.length; i++) {
        if (result[i] === " ") {
            searchPos++;
            if (searchPos === newPos) { 
                newPos = i; break; }
        }
    }
    return (result.substring(0, newPos + 1) + str2 + result.substring(newPos)).trim()
}

module.exports = insertString