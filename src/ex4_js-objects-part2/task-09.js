function insertString(str1, str2, pos) {
    let x = 0;
    let new_pos = pos + 1
    let newstr = str1 + " "
    for (let i = 0; i < newstr.length; i++) {
        if (newstr[i] === " ") {
            x++;
            if (x === new_pos) { 
                new_pos = i; break; }
        }
    }
    return (newstr.substring(0, new_pos + 1) + str2 + newstr.substring(new_pos)).trim()
}

module.exports = insertString