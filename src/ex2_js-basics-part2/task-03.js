function countOddEven(array) {
	const result = {
		even: 0,
		odd: 0,
		zero: 0
		}
	for (let i = 0; i < array.length; i++) {
      	if (array[i] === null) {} else
		if (array[i] === 0) {result.zero++} else
		if (array[i] % 2 === 0) {result.even++} else
		{result.odd++ }
	}
	return (Array(result.even, result.odd, result.zero))
}

module.exports = countOddEven
