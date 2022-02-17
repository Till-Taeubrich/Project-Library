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

function getUserInput(){
  const title =  prompt('title','');
  const author = prompt('author','');
  let numberOfPages = Number(prompt('numberOfPages', ''));
  let readingStatus = prompt('readingStatus','');
  
  addBookToLibrary(title, author, numberOfPages, readingStatus);
}

function addBookToLibrary(title, author, numberOfPages, readingStatus) {
  let newBook = new books(title, author, numberOfPages, readingStatus);
  library.push(newBook);
  displayLibrary(title, author, numberOfPages, readingStatus);
}




function displayLibrary(title, author, numberOfPages, readingStatus){

  const tableBody = document.querySelector('.tableBody');

  for (const book of library) {

    const newRow = document.createElement('tr');
    tableBody.append(newRow);

    const titleColumn = document.createElement('td');
    // titleColumn.classList.add('title');

    const authorColumn = document.createElement('td');
    // authorColumn.classList.add('author');

    const pagesColumn = document.createElement('td');
    // pagesColumn.classList.add('pages');

    const statusColumn = document.createElement('td');
    // statusColumn.classList.add('status');


    
    titleColumn.textContent = title;
    tableBody.append(titleColumn);

    authorColumn.textContent = author;
    tableBody.append(authorColumn);

    pagesColumn.textContent = numberOfPages;
    tableBody.append(pagesColumn);

    statusColumn.textContent = readingStatus;
    tableBody.append(statusColumn);
    



    // const titleColumn = document.createElement('td');
    // const authorColumn = document.createElement('td');
    // const pagesColumn = document.createElement('td');
    // const statusColumn = document.createElement('td');
  }
}






// UI
const button = document.querySelector('.addBook');
const titleField = document.querySelector('.title')
const authorField = document.querySelector('.author')
const pagesField = document.querySelector('.pages')
const statusField = document.querySelector('.status')


button.addEventListener('click', getUserInput);