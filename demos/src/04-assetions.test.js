// matchers
test('test objects', () => {
  const data = { name: 'mafe' };
  data.lastname = 'rios';
  expect(data).toEqual({ name: 'mafe', lastname: 'rios' });
});
test('null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});
test('boolean', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);
  expect(false).toBeFalsy();
  expect(0).toBeFalsy();
  expect('').toBeFalsy();
});
test('string', () => {
  expect('Kalu Alex').toMatch(/Alex/);
});
test('list/arrays', () => {
  const numbers = [1, 2, 3, 4];
  expect(numbers).toContain(2);
});
