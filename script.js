// Data
let library = [];

class books {
  constructor(title, author, numberOfPages, readingStatus) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.readingStatus = readingStatus;
  }
}

function displayLibrary() {
  for (const book of library) {}
}


function getUserInput(){
  const title =  prompt('title','');
  const author = prompt('author','');
  let numberOfPages = Number(prompt('numberOfPages', ''));
  let readingStatus = prompt('readingStatus','');
}

function addBookToLibrary(title, author, numberOfPages, readingStatus) {
  let newBook = new books(title, author, numberOfPages, readingStatus);
  library.push(newBook);
  displayNewBook(title, author, numberOfPages, readingStatus);
}


function displayNewBook(title, author, numberOfPages, readingStatus){

  const tableBody = document.querySelector('.tableBody');
  
  const newRow = document.createElement('tr');
  newRow.classList.add('newRow')
  tableBody.append(newRow);

  const titleColumn = document.createElement('td');
  titleColumn.textContent = title;
  newRow.append(titleColumn);
    
  const authorColumn = document.createElement('td');
  authorColumn.textContent = author;
  newRow.append(authorColumn);

  const pagesColumn = document.createElement('td');
  pagesColumn.textContent = numberOfPages;
  newRow.append(pagesColumn);
    
  const statusColumn = document.createElement('td');
  statusColumn.textContent = readingStatus;
  newRow.append(statusColumn);
}




// UI
const button = document.querySelector('.addBook');
const titleField = document.querySelector('.title')
const authorField = document.querySelector('.author')
const pagesField = document.querySelector('.pages')
const statusField = document.querySelector('.status')


button.addEventListener('click', getUserInput);