const form  = document.getElementById('book-data');
const bookTitle = document.querySelector('#book-title');
const bookAuthor = document.querySelector('#book-author');
const bookListed = document.querySelector('.book-list')

let Books = [];

function addToList(){
  bookListed.innerHTML = '';
  Books.map((book) => {
    const li = document.createElement('li');
    const div = document.createElement('div');
    const title = document.createElement('p');
    title.innerHTML = book.title;
    const author = document.createElement('p');
    author.innerHTML = book.author;
    let btn = document.createElement('button');
    btn.innerHTML = "REMOVE BOOK";
    btn.addEventListener('click', () => {
      removeBooks(btn.parentNode, book.title);
    });
    div.appendChild(title);
    div.appendChild(author);
    div.appendChild(btn);
    li.appendChild(div);
    bookListed.appendChild(li);
    return book;
  });
}

function addToPage(title, author){
  saveBook(author, title);
  addToList();
}

function saveBook(author, title){ 
  let book = {
    author: author,
    title: title
  }
  Books.push(book)
}

function removeBooks(currentDiv, title){
  li = currentDiv.parentNode
  li.remove();
  Books = Books.filter((book) => book.title !== title);
  saveBooks();
  addToList();
}

form.addEventListener('submit', (event) => {
    addToPage(bookTitle.value, bookAuthor.value);
    saveBooks();
    event.preventDefault();
});

window.onload = function () {
  Books = JSON.parse(localStorage.getItem('Books') || '[]');
  addToList();
};

function saveBooks() {
  localStorage.setItem('Books', JSON.stringify(Books));
};
