class Library {
  constructor () {
    this.books = [];
    this.form = document.getElementById('book-data');
    this.bookTitle = document.querySelector('#book-title');
    this.bookAuthor = document.querySelector('#book-author');
    this.bookListed = document.querySelector('.book-list');

    this.form.addEventListener('submit', () => {
      this.addBooks(this.bookTitle.value, this.bookAuthor.value);
      this.saveBooks();
      this.form.submit();
    }); 
  }

    saveBooks() { 
      localStorage.setItem('books', JSON.stringify(this.books));
   }

    displayBooks() {  
      this.bookListed.innerHTML = '';
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
        Books = Books.filter((b) => b.id !== book.id);
        saveBooks();
        this.displayBooks();
      });
      div.appendChild(title);
      div.appendChild(author);
      div.appendChild(btn);
      li.appendChild(div);
      bookListed.appendChild(li);
      return book;
    });}
    deleteBooks() {  }

    addBooks(author, title) { 
      let book = new Book (author, title,this.Books.length + 1)
      this.books.push(book)
      this.displayBooks()
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


// const form = document.getElementById('book-data');
// const bookTitle = document.querySelector('#book-title');
// const bookAuthor = document.querySelector('#book-author');
// const bookListed = document.querySelector('.book-list');
// let Books = [];

// function saveBooks() {
//   localStorage.setItem('Books', JSON.stringify(Books));
// }

// function saveBook(author, title) {
//   const book = {
//     author,
//     title,
//     id: Books.length + 1,
//   };
//   Books.push(book);
// }

// function addToList() {
//   bookListed.innerHTML = '';
//   Books.map((book) => {
//     const li = document.createElement('li');
//     const div = document.createElement('div');
//     const title = document.createElement('p');
//     title.innerHTML = book.title;
//     const author = document.createElement('p');
//     author.innerHTML = book.author;
//     const btn = document.createElement('button');
//     btn.innerHTML = 'REMOVE BOOK';
//     btn.addEventListener('click', () => {
//       Books = Books.filter((b) => b.id !== book.id);
//       saveBooks();
//       addToList();
//     });
//     div.appendChild(title);
//     div.appendChild(author);
//     div.appendChild(btn);
//     li.appendChild(div);
//     bookListed.appendChild(li);
//     return book;
//   });
// }

// function addToPage(title, author) {
//   saveBook(author, title);
//   addToList();
// }

// form.addEventListener('submit', () => {
//   addToPage(bookTitle.value, bookAuthor.value);
//   saveBooks();
//   form.submit();
// });

// window.onload = () => {
//   Books = JSON.parse(localStorage.getItem('Books') || '[]');
//   addToList();
// };