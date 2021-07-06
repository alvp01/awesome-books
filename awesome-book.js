const form = document.getElementById('book-data');
const bookTitle = document.querySelector('#book-title');
const bookAuthor = document.querySelector('#book-author');
const bookListed = document.querySelector('.book-list');
let Books = [];

function saveBooks() {
  localStorage.setItem('Books', JSON.stringify(Books));
}

function saveBook(author, title) {
  const book = {
    author,
    title,
    id: Books.length + 1,
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
      Books = Books.filter((b) => b.id !== book.id);
      saveBooks();
      addToList();
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

window.onload = () => {
  Books = JSON.parse(localStorage.getItem('Books') || '[]');
  addToList();
};