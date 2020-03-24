function checkType(x) {
	if (typeof (x) === 'number' && !Number.isNaN(x)) {
		return 'number';
	} else
		if (typeof (x) === 'string') {
			return 'string'
		}
	return undefined
}

module.exports = checkType
