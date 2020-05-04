function convertTolCC(str) {
    let result = str[0].toLowerCase() + str.slice(1)
    for (let i = 0; i <= result.length; i++) {
        if (result[i] === " ") { 
            result = result.substring(0, i) + result[i + 1].toUpperCase() + result.substring(i + 2).toLowerCase() }
    }
    return result
}

module.exports = convertTolCC