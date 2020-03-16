function countOddEven(arr) {
let even=0, odd=0, zero=0
for(let i=0; i<arr.length; i++) {	
if (arr[i] === 0 )	{zero++} else
if (arr[i] % 2 === 0 && arr[i] === null) {even++} else
if (Math.abs(arr[i]) % 2 === 1) {odd++}
}
 return (Array(even,odd,zero))
}

 module.exports = countOddEven 

 

