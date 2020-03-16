function convertTolCC (str) {
let newstr = str[0].toLowerCase() + str.slice(1)
for (let i = 0; i <= newstr.length; i++) {
if (newstr[i]===" ")
{newstr = newstr.substring(0, i) + newstr[i+1].toUpperCase()+newstr.substring(i+2).toLowerCase()}
}
return newstr
}


module.exports = convertTolCC