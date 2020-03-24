function checkType(number){
  if (typeof(number)==="number") {
		return true
  }
  return false
}

let Calculator = {
    result: 0,
add:  function (number){  
  if (checkType(number)) {
        Calculator.result = Calculator.result + number
  }
  return Calculator.add;
},
subtract: function (number) {
  if (checkType(number)) {
       Calculator.result = Calculator.result - number
   }
   return Calculator.subtract;
 },
 divide: function (number) {
   if (checkType(number) && number!==null && number!==0) {
       Calculator.result = Calculator.result / number
	}
   return Calculator.divide;
},
multiply: function (number) {
   if (checkType(number)) {
    Calculator.result = Calculator.result * number
    }
   return Calculator.multiply;
},   
getResult: function () {
    return Calculator.result;
},
reset: function () {
     Calculator.result = 0;
     return Calculator.result;
}  
}

module.exports=Calculator