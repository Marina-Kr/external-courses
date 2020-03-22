function printArr(arr) {
	const arrLength = arr.length;
	if (typeof (arr) === 'object') {
		for (let i = 0; i < arrLength; i++) {
			console.log(arr[i])
		}
		console.log('Длина массива равна ' + arrLength)
	}
	return;
}


module.exports = printArr
