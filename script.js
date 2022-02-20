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
    displayBooksInTable(title, author, numberOfPages, readingStatus);
  }
}

function openPopUp() {
  popUp.classList.remove('hidden');
}

function closePopUp() {
  popUp.classList.add('hidden');
}

function getUserInput(){
  const titleValue = document.getElementById('title').value;
  const authorValue = document.getElementById('author').value;
  const numberOfPagesValue = document.getElementById('pages').value;
  const readingStatusValue = checkStatus();
  const stringValidation = /[A-Za-z]/;
  const numberValidation = /[0-9]/;
  
  if ((stringValidation.test(titleValue) === true) &&
      (stringValidation.test(authorValue) === true) &&
      (numberValidation.test(numberOfPagesValue) === true)){
        errorMessage.innerHTML = ''
    addBookToLibrary(titleValue, authorValue, numberOfPagesValue, readingStatusValue);
  } 
  else {errorMessage.innerHTML = 'Wrong format: Use letters for Title & Author Field. Use numbers for Pages Field.';
  }
}

function checkStatus(){
  const checkBox = document.getElementById('status');
 
  if (checkBox.checked) return true;
  return false
}

function addBookToLibrary(title, author, numberOfPages, readingStatus) {
  const newBook = new books(title, author, numberOfPages, readingStatus);
  library.push(newBook);
  displayBooksInTable(title, author, numberOfPages, readingStatus);
}

function displayBooksInTable(title, author, numberOfPages, readingStatus){
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

const newBookButton = document.querySelector('.newBook');
const popUp = document.querySelector('.popUp');
const cancelButton = document.querySelector('.cancel');
const addButton = document.querySelector('.add');
const errorMessage = document.querySelector('.errorMessage')

newBookButton.addEventListener('click', openPopUp);
cancelButton.addEventListener('click', closePopUp);
addButton.addEventListener('click', () => {
  getUserInput()
  // closePopUp();
});