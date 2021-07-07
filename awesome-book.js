const bookTitle = document.querySelector('#book-title');
const bookAuthor = document.querySelector('#book-author');
const bookListed = document.querySelector('.book-list');

class Library {
  constructor () {
    this.books = new Array();
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
      const li = document.createElement('li');
      const div = document.createElement('div');
      const title = document.createElement('p');
      title.innerHTML = book.title;
      const author = document.createElement('p');
      author.innerHTML = book.author;
      const btn = document.createElement('button');
      btn.innerHTML = 'REMOVE BOOK';
      btn.addEventListener('click', () => {
        this.removeBooks(book);
      });
      div.appendChild(title);
      div.appendChild(author);
      div.appendChild(btn);
      li.appendChild(div);
      bookListed.appendChild(li);
      return book;
    });
    }

    removeBooks(book) {
      this.books = this.books.filter((b) => b.id !== book.id);
      this.saveBooks();
      this.displayBooks();
    }

    addBooks(author, title) { 
      let book = new Book(author, title, this.books.length+1);
      this.books.push(book);
      this.displayBooks();
      this.saveBooks();
    }
  }

class Book {
  constructor(author, title,id) { 
    this.author = author;
    this.title = title;
    this.id = id;
  }
}

let library = new Library();
const form = document.getElementById('book-data');


form.addEventListener('submit', () => {
  library.addBooks(bookAuthor.value, bookTitle.value);
  form.submit();
});

window.onload = () => {
  library.setBooks();
  library.displayBooks();
};