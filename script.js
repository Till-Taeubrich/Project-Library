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

function openPopUp() {
  popUp.classList.remove('hidden');
}

function closePopUp() {
  popUp.classList.add('hidden');
}

function getUserInput(){
  const titleValue = titleField.value;
  const authorValue = authorField.value;
  const numberOfPagesValue = numberOfPagesField.value;
  const readingStatusValue = checkReadingStatus();
  const stringValidation = /[A-Za-z]/;
  const numberValidation = /[0-9]/;
  
  if ((stringValidation.test(titleValue) === true) &&
      (stringValidation.test(authorValue) === true) &&
      (numberValidation.test(numberOfPagesValue) === true)){
        addBookToLibrary(titleValue, authorValue, numberOfPagesValue, readingStatusValue);
        closePopUp();
        clearForm(titleValue, authorValue, numberOfPagesValue);
  } else {errorMessage.innerHTML = 'Please use  letters for Title/Author Field & numbers for Pages Field.'};
}

function checkReadingStatus(){
  const checkBox = document.getElementById('status');
 
  if (checkBox.checked) return true;
  return false;
}

function clearForm(){
  errorMessage.innerHTML = '';
  titleField.value = '';
  authorField.value = '';
  numberOfPagesField.value = '';
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
  const statusCheckbox = document.createElement('input');
  statusCheckbox.setAttribute('type', 'checkbox');
  const removeBookButton = document.createElement('button');
  
  titleColumn.textContent = `"${title}"`;
  authorColumn.textContent = author;
  pagesColumn.textContent = numberOfPages;
  statusCheckbox.checked = readingStatus;
  removeBookButton.textContent = 'Remove Book';
  removeBookButton.classList.add('removeBookButton');
  removeBookButton.addEventListener('click', (e) => {
    removeBook(e.target);
  })


  
  newRow.append(titleColumn);
  newRow.append(authorColumn);
  newRow.append(pagesColumn);    
  newRow.append(statusCheckbox);
  newRow.append(removeBookButton);
}

function removeBook(removeButton){
removeButton.parentNode.remove();
}

// mainPage
const newBookButton = document.querySelector('.newBook');
const removeBookButtons = document.querySelectorAll('.removeBookButton');

// popUp
const popUp = document.querySelector('.popUp');
const titleField = document.getElementById('title');
const authorField = document.getElementById('author');
const numberOfPagesField = document.getElementById('pages');
const cancelButton = document.querySelector('.cancel');
const addButton = document.querySelector('.add');
const errorMessage = document.querySelector('.errorMessage')

newBookButton.addEventListener('click', openPopUp);
cancelButton.addEventListener('click', closePopUp);
addButton.addEventListener('click', () => {
  getUserInput();
});









// USE CODE BELOW FOR ADDING BOOKS THAT ARE ALREADY IN LIBRARY BEFORE USER INPUT. MIGHT BE HANDY FOR FUTURE FUNCTION. (USING CLOUD TO SAVE DATA)





// function scanLibrary() {
  
//   const currentLibraryAmount = library.length
  
//   for (let i = 0; i < currentLibraryAmount; i++) {
//     const book = library[i];
//     title = book.title;
//     author = book.author;
//     numberOfPages = book.numberOfPages;
//     readingStatus = book.readingStatus;
//     displayBooksInTable(title, author, numberOfPages, readingStatus);
//   }
// }

// scanLibrary()