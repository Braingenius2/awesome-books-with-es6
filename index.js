import Books from './modules/booklist.js';
import DateData from './modules/dateTime.js';

const addButtonElement = document.getElementById('add-btn');
const titleInputElement = document.getElementById('title-input');
const authorInputElement = document.getElementById('author-input');
const bookListElement = document.getElementById('book-list');
const listLink = document.querySelector('.list-link');
const addLink = document.querySelector('.add-link');
const contactLink = document.querySelector('.contact-link');
const formElement = document.getElementById('form');
const contactElement = document.getElementById('contact');

// render dateTime information into the date-time element
const date = new DateData('.date-time');
date.render();

const booksObj = new Books();
booksObj.displayBookList();

// Event listener for the add book button
addButtonElement.addEventListener('click', (event) => {
  event.preventDefault();

  // Get the values from the input fields
  const title = titleInputElement.value;
  const author = authorInputElement.value;

  // Add the book to the collection
  booksObj.addBook(title, author);

  // Clear the input fields
  titleInputElement.value = '';
  authorInputElement.value = '';

  // Display the updated book list
  booksObj.displayBookList();
});

// Event listeners for links on nav menu
listLink.addEventListener('click', () => {
  bookListElement.style.display = 'flex';
  formElement.style.display = 'none';
  contactElement.style.display = 'none';
});

addLink.addEventListener('click', () => {
  bookListElement.style.display = 'none';
  formElement.style.display = 'flex';
  contactElement.style.display = 'none';
});

contactLink.addEventListener('click', () => {
  bookListElement.style.display = 'none';
  formElement.style.display = 'none';
  contactElement.style.display = 'flex';
});
