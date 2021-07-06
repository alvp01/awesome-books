const form  = document.getElementById('book-data');
const bookTitle = document.querySelector('#book-title');
const bookAuthor = document.querySelector('#book-author');
const bookListed = document.querySelector('.book-list');
const myBookStorage = window.localStorage;


let Books = [];
Books = Object.entries(myBookStorage);

// function addToList(title, author){
  
// }

function addToPage(title, author){

    let titleBook = document.createElement('p')
        titleBook.textContent = title;

    let authorBook = document.createElement('p')
        authorBook.textContent = author;
        bookListed.appendChild(addToList(titleBook, authorBook));
        localStorage.setItem(title, author);

    let li = document.createElement('li');
    let div = document.createElement('div');
    let btn = document.createElement('button');

    btn.innerHTML = "REMOVE BOOK";
    btn.addEventListener('click', () => {
    removeBooks(btn.parentNode);
  });

    div.appendChild(title);
    div.appendChild(author);
    div.appendChild(btn);

    li.appendChild(div);
    return li;

}

function removeBooks(btn){
  li = btn.parentNode
  li.remove();
  Books=Object.entries(myBookStorage);
  Storage.removeItem(titleBook, authorBook);
}

form.addEventListener('submit', (event) => {
    addToPage(bookTitle.value, bookAuthor.value);
    event.preventDefault();
});
