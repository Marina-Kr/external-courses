function checkType(number){
  if (typeof(number)==="number") {
		return true
  }
  return false
}

let Calculator = {
    result: 0,
add:  function (number=0){  
  if (checkType(number)) {
        Calculator.result = Calculator.result + number
  }
  return Calculator.add;
},
subtract: function (number=0) {
  if (checkType(number)) {
       Calculator.result = Calculator.result - number
   }
   return Calculator.subtract;
 },
 divide: function (number=1) {
   if (checkType(number)) {
       Calculator.result = Calculator.result / number
	}
   return Calculator.divide;
},
multiply: function (number=1) {
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
  }  
}

module.exports=Calculator