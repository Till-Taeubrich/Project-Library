// Data
let myLibrary = [];

class book {
  constructor(title, author, numberOfPages, readingStatus) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.readingStatus = readingStatus;
  }
}

function addBookToLibrary() {
  let title = prompt('title','');
  let author = prompt('author','');
  let numberOfPages = prompt('numberOfPages','');
  let readingStatus = prompt('readingStatus','');

  let newBook = new book(title, author, numberOfPages, readingStatus);
  
  myLibrary.push(newBook);
}

// UI
const button = document.querySelector('.addBook');



button.addEventListener('click', addBookToLibrary);