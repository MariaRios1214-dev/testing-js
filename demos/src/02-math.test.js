const {
  sum, multiply, divide, average,
} = require('./02-math');

test('adds 1 + 3 should be 4', () => {
  const rta = sum(1, 3);
  expect(rta).toBe(4);
});
test('multiply 1 * 3 should be 3', () => {
  const rta = multiply(1, 3);
  expect(rta).toBe(3);
});
test('should divide', () => {
  const rta = divide(4, 2);
  expect(rta).toBe(2);
  const rta01 = divide(2, 2);
  expect(rta01).toBe(1);
  const rta02 = divide(2, 0);
  expect(rta02).toBeNull();
});
test('should calculated the average', () => {
  const rta = average(3, 4, 5);
  expect(rta).toBe(4);
  const rta01 = average(0, 0, 0);
  expect(rta01).toBe(0);
});
