function checkType(x) {
  if (typeof(x) === 'number' && !x.isNaN) {
     return 'number';
  } else 
    if (typeof(x) === 'string') {
    return 'string'}
	 return undefined
}

module.exports = checkType
