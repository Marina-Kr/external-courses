function countSymbols(str) {
	let newstr = str
	while (newstr.length > 0) {
		let x = 1
		for (let i = 1; i < newstr.length; i++) {
			if (newstr[0] === newstr[i]) {
				x++
			}
		}
		console.log(newstr[0] + ' встречается ' + x + ' раз')
		if (x === 1) {
			newstr = newstr.replace(newstr[0], "")
		}
		else {
			for (let i = 1; i < newstr.length; i++) {
				if (newstr[0] === newstr[i]) {
					newstr = (newstr.split(newstr[i]).join(""))
				}
			}
		}
	}
}

module.exports = countSymbols