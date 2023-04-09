const Person = require('./06-person');

describe('Test for Person', () => {
  let person;
  let person1;
  let person2;

  beforeAll(() => {
    person = new Person('Andres', 45, 1.70);
    person1 = new Person('Maria', 75, 1.57);
    person2 = new Person('Lorena', 85, 1.63);
  });

  test('should return down', () => {
    const imc = person.calcIMC();
    expect(imc).toBe('down');
  });

  test('should return overweight', () => {
    person.weight = 75;
    const imc = person.calcIMC();
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
});
