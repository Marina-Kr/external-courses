function reverseString(str) {
    let newstr = "";
    for (let i = 1; i <= str.length; i++) { 
        newstr = newstr + str[(str.length - i)]; }
    return newstr
}

module.exports = reverseString