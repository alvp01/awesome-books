const form  = document.getElementById('book-data');
const bookTitle = document.querySelector('#book-title');
const bookAuthor = document.querySelector('#book-author');
const bookListed = document.querySelector('.book-list')
bookListed.appendChild(addToPage('Home'));

let Books = [];

function addBook(){
    var Book = {
        title: bookTitle.value,
        author: bookAuthor.value,
    }
    Books.push(Book);
    console.log(Books, Book);
}

function addToPage(content){
    let li = document.createElement('li');
    li.textContent=content;
    return li;
}

form.addEventListener('submit', (event) => {
    form.submit();
    addBook();
});
