const form  = document.getElementById('book-data');
const bookTitle = document.querySelector('#book-title');
const bookAuthor = document.querySelector('#book-author');
const bookListed = document.querySelector('.book-list')

let Books = [];

function addToList(title, author){
  let li = document.createElement('li');
  let div = document.createElement('div');

  div.appendChild(title);
  div.appendChild(author);
  li.appendChild(div);
  return li;
}

function addToPage(title, author){
  let titleBook = document.createElement('p')
  titleBook.textContent = title;
  let authorBook = document.createElement('p')
  authorBook.textContent = title;
  bookListed.appendChild(addToList(titleBook, authorBook));
}

form.addEventListener('submit', (event) => {
    addToPage(bookTitle.value, bookAuthor.value);
    event.preventDefault();
});
