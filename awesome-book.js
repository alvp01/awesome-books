const form = document.getElementById('book-data');
const bookTitle = document.querySelector('#book-title');
const bookAuthor = document.querySelector('#book-author');
const bookListed = document.querySelector('.book-list');
let Books = [];

function saveBooks() {
  localStorage.setItem('Books', JSON.stringify(Books));
}

function removeBooks(title) {
  Books = Books.filter((book) => book.title !== title);
  saveBooks();
  addToList();
}

function saveBook(author, title) {
  const book = {
    author,
    title,
  };
  Books.push(book);
}

function addToList() {
  bookListed.innerHTML = '';
  Books.map((book) => {
    const li = document.createElement('li');
    const div = document.createElement('div');
    const title = document.createElement('p');
    title.innerHTML = book.title;
    const author = document.createElement('p');
    author.innerHTML = book.author;
    const btn = document.createElement('button');
    btn.innerHTML = 'REMOVE BOOK';
    btn.addEventListener('click', () => {
      removeBooks(book.title);
    });
    div.appendChild(title);
    div.appendChild(author);
    div.appendChild(btn);
    li.appendChild(div);
    bookListed.appendChild(li);
    return book;
  });
}

function addToPage(title, author) {
  saveBook(author, title);
  addToList();
}

form.addEventListener('submit', () => {
  addToPage(bookTitle.value, bookAuthor.value);
  saveBooks();
  form.submit();
});

window.onload = function () {
  Books = JSON.parse(localStorage.getItem('Books') || '[]');
  addToList();
};