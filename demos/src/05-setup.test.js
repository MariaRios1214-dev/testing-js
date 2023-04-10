describe('set', () => {
  beforeAll(() => {
    console.log('beforeAll test');
  });
  beforeEach(() => {
    console.log('beforeEach test');
  });
  afterAll(() => {
    console.log('afterAll test');
  });
  afterEach(() => {
    console.log('afterEach test');
  });
  test('case 1', () => {
    console.log('case 1');
    expect(1 + 1).toEqual(2);
  });
  test('case 2', () => {
    expect(2 + 2).toEqual(4);
  });
  describe('other set', () => {
    test('case 1', () => {
      expect(1 + 1).toEqual(2);
    });
    test('case 2', () => {
      expect(2 + 2).toEqual(4);
    });
  });
});
