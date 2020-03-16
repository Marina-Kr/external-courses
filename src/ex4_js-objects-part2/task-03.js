function deleteSpaces (str) {
let newstr = str.replace(' ', '')
if (newstr.substring(newstr.length-1)===" ") {
newstr=newstr.substring(0, newstr.length-1)}
return newstr
}
module.exports = deleteSpaces