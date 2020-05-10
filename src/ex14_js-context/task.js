newBind = function (context, ...args1) {
  let func = this;
  return function (...arg2) {
      func.apply(context, [...args1, ...arg2])
  }
};

module.exports = newBind