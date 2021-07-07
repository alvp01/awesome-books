const bookTitle = document.querySelector('#book-title');
const bookAuthor = document.querySelector('#book-author');
const bookListed = document.querySelector('.book-list');

class Library {
  constructor() {
    this.books = [];
  }

  setBooks() {
    this.books = JSON.parse(localStorage.getItem('books') || '[]');
  }

  saveBooks() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  displayBooks() {
    bookListed.innerHTML = '';
    this.books.map((book) => {
      const div1 = document.createElement('div');
      const p = document.createElement('p');
      p.innerHTML = ` "${book.title}" by ${book.author}.`;
      const btn = document.createElement('button');
      btn.innerHTML = 'REMOVE BOOK';
      btn.addEventListener('click', () => {
        this.removeBooks(book);
      });
      div1.appendChild(p);
      div1.classList.add("flex-row");
      btn.classList.add("btn");
      div1.appendChild(btn);
      div1.classList.add("book-list-item");
      bookListed.appendChild(div1);
      return book;
    });
  }

  removeBooks(book) {
    this.books = this.books.filter((b) => b.id !== book.id);
    this.saveBooks();
    this.displayBooks();
  }

  addBooks(author, title) {
    const book = { author, title, id: this.books.length + 1 };
    this.books.push(book);
    this.displayBooks();
    this.saveBooks();
  }
}

const library = new Library();
const form = document.getElementById('book-data');

form.addEventListener('submit', () => {
  library.addBooks(bookAuthor.value, bookTitle.value);
  form.submit();
});

window.onload = () => {
  library.setBooks();
  library.displayBooks();
};