// Data
const library = [];

class books {
  constructor(title, author, numberOfPages, readingStatus) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.readingStatus = readingStatus;
  }
}

function scanLibrary() {
  
  const currentLibraryAmount = library.length
  
  for (let i = 0; i < currentLibraryAmount; i++) {
    const book = library[i];
    title = book.title;
    author = book.author;
    numberOfPages = book.numberOfPages;
    readingStatus = book.readingStatus;
    addBookToLibrary(title, author, numberOfPages, readingStatus);
  }
}

function openPopUp() {
  popUp.classList.remove('hidden');
}

function closePopUp() {
  popUp.classList.add('hidden');
}

function getUserInput(){
  const title =  prompt('title','');
  const author = prompt('author','');
  const numberOfPages = Number(prompt('numberOfPages', ''));
  const readingStatus = prompt('readingStatus','');
  addBookToLibrary(title, author, numberOfPages, readingStatus)
}

function addBookToLibrary(title, author, numberOfPages, readingStatus) {
  const newBook = new books(titleField, author, numberOfPages, readingStatus);
  library.push(newBook);
  displayNewBookInTable(title, author, numberOfPages, readingStatus);
}

function displayNewBookInTable(title, author, numberOfPages, readingStatus){
  const tableBody = document.querySelector('.tableBody');

  // Add row to table
  const newRow = document.createElement('tr');
  tableBody.append(newRow);

  // Add columns to row
  const titleColumn = document.createElement('td');
  const authorColumn = document.createElement('td');
  const pagesColumn = document.createElement('td');
  const statusColumn = document.createElement('td');
  
  titleColumn.textContent = title;
  authorColumn.textContent = author;
  pagesColumn.textContent = numberOfPages;
  statusColumn.textContent = readingStatus;
  
  newRow.append(titleColumn);
  newRow.append(authorColumn);
  newRow.append(pagesColumn);    
  newRow.append(statusColumn);
}

scanLibrary()

// UI

// const button = document.querySelector('.addBook');

// popUp

const newBookButton = document.querySelector('.newBook');
const popUp = document.querySelector('.popUp');
const titleField = document.querySelector('.title').value;
const authorField = document.querySelector('.author');
const pagesField = document.querySelector('.pages');
const statusField = document.querySelector('.status');
const cancelButton = document.querySelector('.cancel');
const addButton = document.querySelector('.add');


// button.addEventListener('click', getUserInput);

newBookButton.addEventListener('click', openPopUp);
cancelButton.addEventListener('click', closePopUp);
addButton.addEventListener('click', () => {
  getUserInput()
  closePopUp();
});


// cancelButton.addEventListener('click', () => {
//   popUp.classList.add('hidden');
// })
