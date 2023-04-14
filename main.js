let myLibrary = [];

fullUse();

function fullUse() {
document.querySelector('#submit').addEventListener('click', () => {
addBookToLibrary();
addBooks();
removeBook();
toggleStatus();
return;
})}



function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  }


function addBookToLibrary() {
     let titleValue = document.querySelector('#title').value ;
     let authorValue = document.querySelector('#author').value ;
     let pagesValue = document.querySelector('#pages').value ;
     let read = document.querySelector('.check').checked ;
    const newBook = new Book(titleValue, authorValue, pagesValue, read) ;
    myLibrary.push(newBook);
    return;
   }

function addBooks() {
    let newBook = myLibrary[myLibrary.length - 1];
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
    toggle.textContent = 'Read';
    content.appendChild(toggle);
    toggle.classList.add('toggle');
    remove.textContent = 'Remove';
    content.appendChild(remove);
    remove.classList.add('remove');
    container.appendChild(content);
    if(newBook.read) {
      toggle.textContent = 'Read';
      toggle.classList.add('toggle-on');
    } else {
      toggle.textContent = "Not Read";
      toggle.classList.add('toggle-off');
    }
    return;
  }

function removeBook() {
    document.querySelectorAll('.remove').forEach(button => {
    button.addEventListener('click', () => {
      event.target.parentNode.remove();
      myLibrary.splice(1,1);
      return;
})})}

function toggleStatus() {
  document.querySelectorAll('.toggle').forEach(button => {
    button.addEventListener('click', () => {
      if(event.target.classList.contains('toggle-on')) {
        event.target.classList.remove('toggle-on')
        event.target.classList.add('toggle-off')
        event.target.textContent = 'Not Read'
      } else if (event.target.classList.contains('toggle-off')) {
        event.target.classList.remove('toggle-off');
        event.target.classList.add('toggle-on');
        event.target.textContent = "Read"
        return;
      }

    }
  )}

  )}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

