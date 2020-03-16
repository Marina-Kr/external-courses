function printArr(arr) {
	if (typeof(arr)==='object') {
for(let i=0; i<arr.length; i++) {
console.log(arr[i])
}
console.log('Длина массива равна '+ arr.length)
  }
return undefined
}


module.exports = printArr