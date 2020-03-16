function convertToUpper (str) {
let newstr = str[0].toUpperCase() + str.slice(1)
for (let i = 0; i <= newstr.length; i++) {
if (newstr[i]===" ")
{newstr = newstr.substring(0, i+1) + newstr[i+1].toUpperCase()+newstr.substring(i+2)}}
return newstr
}
module.exports = convertToUpper