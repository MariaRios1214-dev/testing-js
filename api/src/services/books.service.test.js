const BookService = require('./books.service');

const fakeBooks = [
  {
    _id: 1,
    name: 'Harry Potter',
  },
  {
    _id: 2,
    name: 'Mente Millonaria',
  },
];

const MongoLibStub = {
  getAll: () => [...fakeBooks],
  create: () => {},
};

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => MongoLibStub));

describe('Test for BooskService', () => {
  let service;
  beforeEach(() => {
    service = new BookService();
    jest.clearAllMocks();
  });

  describe('test for getBooks', () => {
    test('should return a list books', async () => {
      // Arrange
      // Act
      const books = await service.getBooks();
      console.log('books', books);
      // Assert
      expect(books.length).toBe(2);
    });
  });
});
