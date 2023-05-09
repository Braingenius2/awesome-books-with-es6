export default class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  // method to remove a book from a given booklist
  removeBook(id, booklist) {
    booklist = booklist.filter((book) => book.id !== id);
    let localStorageBooks = JSON.parse(localStorage.getItem('books'));
    localStorageBooks = localStorageBooks.filter((obj) => obj.id !== parseInt(id, 10));
    localStorage.setItem('books', JSON.stringify(localStorageBooks));
  }
}