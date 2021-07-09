/* eslint-disable */
const { DateTime } = luxon;
/* eslint-enable */
const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
const navDate = document.createElement('span');
navDate.innerHTML = now;

const nav = document.querySelector('#navigation');
nav.appendChild(navDate);

const homeSection = document.querySelector('#home');
const bookFormSection = document.querySelector('#add-books');
const contactSectionObj = document.querySelector('#contact-link');

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
    let i = 0;
    this.books.map((book) => {
      const div1 = document.createElement('div');
      const p = document.createElement('p');
      p.innerHTML = ` "${book.title}" by ${book.author}.`;
      const btn = document.createElement('button');
      btn.innerHTML = 'Remove book';
      btn.addEventListener('click', () => {
        this.removeBooks(book);
      });
      div1.appendChild(p);
      div1.classList.add('flex-row');
      btn.classList.add('remove-btn');
      div1.appendChild(btn);
      div1.classList.add('book-list-item');
      if (i % 2 === 0) {
        div1.classList.add('bg-2');
      }
      bookListed.appendChild(div1);
      i += 1;
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

function displaySections(sectionDisplay) {
  const listSection = document.querySelector('#book-display');
  const formSection = document.querySelector('#book-form-section');
  const contactSection = document.querySelector('#contact-section');

  [listSection.style.display,
    formSection.style.display,
    contactSection.style.display] = sectionDisplay;
}

const library = new Library();
const form = document.getElementById('book-data');

form.addEventListener('submit', () => {
  library.addBooks(bookAuthor.value, bookTitle.value);
  form.submit();
});

homeSection.addEventListener('click', () => {
  displaySections(['flex', 'none', 'none']);
});

bookFormSection.addEventListener('click', () => {
  displaySections(['none', 'flex', 'none']);
});

contactSectionObj.addEventListener('click', () => {
  displaySections(['none', 'none', 'flex']);
});

window.onload = () => {
  library.setBooks();
  library.displayBooks();
};