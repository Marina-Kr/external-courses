function searchSubstr(str, substr) {
    for (let i = 0; i <= str.length; i++) {
       if (substr === str.substring(i, i + substr.length)) { 
		   return true
		}
    }
    return false
}


module.exports = searchSubstr