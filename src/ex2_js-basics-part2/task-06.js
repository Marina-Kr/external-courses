function isPrime(n){
	let x=0
if (n===0 || n===1) {return ('Число является '+ n)}
else if (n>1 && n<=1000) {
for (let i=2; i < n; i++) {
if (n % i === 0) {
x++}}
if (x>0) {return ('Число '+ n+ ' - составное число')} 
return ('Число '+ n +' - простое число')
}
return ('Данные неверны')
}

module.exports = isPrime