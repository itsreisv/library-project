
let myLibrary = [];


fullUse();
function fullUse() {
document.querySelector('#submit').addEventListener('click', () => {
addBookToLibrary();
addBooks();
})}


function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  }

function addBookToLibrary(titleValue, authorValue, pagesValue) {
     titleValue = document.querySelector('#title').value ;
     authorValue = document.querySelector('#author').value ;
     pagesValue = document.querySelector('#pages').value ;
    const newBook = new Book(titleValue, authorValue, pagesValue) ;
    myLibrary.push(newBook);
   }

function addBooks() {
  for(let newBook of myLibrary) {
    const container = document.querySelector("#card-box");
    const content = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const toggle = document.createElement('button');
    const remove = document.createElement('button');
    content.classList.add('card');
    title.textContent =  document.querySelector('#title').value ;
    content.appendChild(title);
    author.textContent = document.querySelector('#author').value ;
    content.appendChild(author);
    pages.textContent =  document.querySelector('#pages').value ;
    content.appendChild(pages);
    toggle.textContent = 'Toggle';
    content.appendChild(toggle);
    toggle.classList.add('toggle');
    remove.textContent = 'Remove';
    content.appendChild(remove);
    remove.classList.add('remove');
    container.appendChild(content);
    return;
  }
}


function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

