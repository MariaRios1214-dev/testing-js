function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) return null;
  return a / b;
}

function average(a, b, c) {
  return (a + b + c) / 3;
}
module.exports = {
  sum, multiply, divide, average,
};
