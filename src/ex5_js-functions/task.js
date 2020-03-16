let Calculator = {
    result: 0,
add:  function (n){  
  if (typeof(n)==="number") {
        Calculator.result = Calculator.result + n}
        return Calculator.add;
    },
subtract: function (n) {
  if (typeof(n)==="number") {
         Calculator.result = Calculator.result - n}
        return Calculator.subtract;
    },
 divide: function (n) {
       if (typeof(n)==="number" && n!==null && n!==0) {
         Calculator.result = Calculator.result / n}
        return Calculator.divide;
    },
multiply: function (n) {
if (typeof(n)==="number") {
    Calculator.result = Calculator.result * n}
  return Calculator.multiply;
    },   
getResult: function () {
     return Calculator.result;
    },
reset: function () {
      Calculator.result = 0;
     return Calculator.result;
    }  
};


module.exports=Calculator