class BookList {
  constructor() {
    this.books = [];
    this.bookListElement = document.getElementById('book-list');
    this.addButtonElement = document.getElementById('add-btn');
    this.titleInputElement = document.getElementById('title-input');
    this.authorInputElement = document.getElementById('author-input');

    // Check if there is any data in localStorage and load it
    if (localStorage.getItem('books')) {
      this.books = JSON.parse(localStorage.getItem('books'));
    }

    // Event listener for the add book button
    this.addButtonElement.addEventListener('click', (event) => {
      event.preventDefault();

      // Get the values from the input fields
      const title = this.titleInputElement.value;
      const author = this.authorInputElement.value;

      // Add the book to the collection
      const book = new Book(this.books.length + 1, title, author);
      this.books.push(book);
      localStorage.setItem('books', JSON.stringify(this.books));

      // Clear the input fields
      this.titleInputElement.value = '';
      this.authorInputElement.value = '';

      // Display the updated book list
      this.displayBookList();
    });

    this.displayBookList();
  }

  removeBook(id) {
   const book = new Book();
   book.removeBook(id, this.books);
  }

  displayBookList() {
    // Clear the book list element
    this.bookListElement.innerHTML = '';

    // Loop through the book collection and create a new element for each book
    this.books.forEach((book) => {
      const bookElement = document.createElement('div');
      bookElement.innerHTML = `<p><span class="title">"${book.title}" by </span>
      <span class="author">${book.author}</span></p>`;
      bookElement.id = `book-${book.id}`;
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.dataset.id = book.id;
      removeButton.addEventListener('click', (event) => {
        const { id } = event.target.dataset;
        this.removeBook(id);
        const bookElement = document.getElementById(`book-${id}`);
        this.bookListElement.removeChild(bookElement);
      });
      bookElement.appendChild(removeButton);
      this.bookListElement.appendChild(bookElement);
    });
  }
}