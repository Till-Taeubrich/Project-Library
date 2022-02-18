// Data
let library = [
  {title: "1",
  author: "1",
  numberOfPages: 1,
  readingStatus: "1",},
  {title: "2",
  author: "2",
  numberOfPages: 2,
  readingStatus: "2",},
  {title: "3",
  author: "3",
  numberOfPages: 3,
  readingStatus: "3",},
];

class books {
  constructor(title, author, numberOfPages, readingStatus) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.readingStatus = readingStatus;
  }
}

// function displayLibrary() {
//   for (const book of library) {

//   }
// }


function getUserInput(){
  const title =  prompt('title','');
  const author = prompt('author','');
  let numberOfPages = Number(prompt('numberOfPages', ''));
  let readingStatus = prompt('readingStatus','');
  addBookToLibrary(title, author, numberOfPages, readingStatus)
}

function addBookToLibrary(title, author, numberOfPages, readingStatus) {
  let newBook = new books(title, author, numberOfPages, readingStatus);
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
  newRow.append(statusColumn);
  newRow.append(pagesColumn);    
}


// UI
const button = document.querySelector('.addBook');
const titleField = document.querySelector('.title')
const authorField = document.querySelector('.author')
const pagesField = document.querySelector('.pages')
const statusField = document.querySelector('.status')


button.addEventListener('click', getUserInput);