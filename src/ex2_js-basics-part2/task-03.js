function IsNumber(x) {
	if (typeof (x) === 'number' && !isNaN(x)) {
		return true;
	} return false 
}

function countOddEven(arr) {
	const result = {
		even: 0,
		odd: 0,
		zero: 0
		}
	for (let i = 0; i < arr.length; i++) {
		if (IsNumber(arr[i])===false) {} else
      	if (arr[i] === null) {} else
		if (arr[i] === 0) {result.zero++} else
		if (arr[i] % 2 === 0) {result.even++} else
				{result.odd++ }
	}
	return (Array(result.even, result.odd, result.zero))
}

module.exports = countOddEven
