// somar com funções 'aninhadas'

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
const result = sum(3)(4)(5);
console.log(result);

//
//
const sub = (a, b) => { return a - b;};
const sum2 = (a, b) => { return a + b;};
const div = (a, b) => {return a / b;};
const multi = (a, b) => {return a * b;};

function calculate(x) {
  return function (y) {
    return function (fn) {
      return fn(x, y);
    };
  };
}

console.log(calculate(2)(2)(multi));
