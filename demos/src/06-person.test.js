const Person = require('./06-person');

// AAA
// Arrange / Given
// Act / when
// Assert / Then
describe('Test for Person', () => {
  let person;
  let person1;
  let person2;

  // Arrange / Given
  beforeEach(() => {
    person = new Person('Andres', 45, 1.70);
    person1 = new Person('Maria', 75, 1.57);
    person2 = new Person('Lorena', 85, 1.63);
  });

  test('should return not found', () => {
    person.weight = null;
    person.height = null;
    const imc = person.calcIMC();
    expect(imc).toBe('not found');
  });
  test('should return down', () => {
    const imc = person.calcIMC();
    expect(imc).toBe('down');
  });

  test('should return overweight', () => {
    // Arrange / Given
    person.weight = 75;
    // Act / when
    const imc = person.calcIMC();
    // Assert / Then
    expect(imc).toBe('overweight');
  });

  test('should return overweight level 2', () => {
    const imc = person1.calcIMC();
    expect(imc).toBe('overweight level 2');
    const imc2 = person2.calcIMC();
    expect(imc2).toBe('overweight level 2');
  });

  test('should return normal', () => {
    person1.weight = 60;
    const imc = person1.calcIMC();
    expect(imc).toBe('normal');
    person2.weight = 65;
    const imc2 = person2.calcIMC();
    expect(imc2).toBe('normal');
  });
  test('should return overweight level 1', () => {
    person1.weight = 72;
    const imc = person1.calcIMC();
    expect(imc).toBe('overweight level 1');
    person2.weight = 78;
    const imc2 = person2.calcIMC();
    expect(imc2).toBe('overweight level 1');
  });
  test('should return overweight level 3', () => {
    person1.weight = 106;
    const imc = person1.calcIMC();
    expect(imc).toBe('overweight level 3');
    person2.weight = 128;
    const imc2 = person2.calcIMC();
    expect(imc2).toBe('overweight level 3');
  });
});
