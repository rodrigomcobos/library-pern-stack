'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('books', [
      {
        name: 'The Hobbit',
        author: 'J.R.R. Tolkein',
        year_published: 1937,
      },
      {
        name: "Harry Potter and the Sorcerer's Stone",
        author: 'J.K. Rowling',
        year_published: 1997,
      },
      {
        name: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        year_published: 1925,
      },
      {
        name: '1984',
        author: 'George Orwell',
        year_published: 1949,
      },
      {
        name: 'Pride and Prejudice',
        author: 'Jane Austen',
        year_published: 1813,
      },
      {
        name: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        year_published: 1960,
      },
      {
        name: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        year_published: 1951,
      },
      {
        name: 'The Grapes of Wrath',
        author: 'John Steinbeck',
        year_published: 1939,
      },
      {
        name: 'The Picture of Dorian Gray',
        author: 'Oscar Wilde',
        year_published: 1890,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('books', null, {});
  },
};
