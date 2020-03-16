function searchSubstr (str, substr) {
 let x = 0;
for (let i = 0; i <= str.length; i++){
if (substr === str.substring(i, i+substr.length))
{x++}}
if (x>0) {return true}
return false
}

module.exports = searchSubstr