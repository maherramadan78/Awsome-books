body {
  box-sizing: content-box;
  background-color: #000;
  color: #D79232;
  font-family: 'Playfair Display', sans-serif;
}
.show {
  display: block !important;
}
.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  border-style: solid;
  border-width: 1px;
  padding: 1px 10px;
}
.nav-list {
  list-style: none;
  display: flex;
  gap: 10px;
}
li {
  border-left: #C78829 solid 1px;
  align-self: center;
  padding: 5px;
}
a {
  color: #C78829;
  text-decoration: none;
}
a:hover {
  opacity: 0.7;
}
a:active {
  opacity: 0.7;
}
.noShow {
  margin-top: 100px;
  font-size: 10px;
  display: none;
}
.page-title {
  color: #fff;
  text-align: center;
}
#main-screen {
  display: block;
}
.main-screen {
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#form-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 230px;
}
.containerbutton {
  display: flex;
  justify-content: end;
}
.book-main-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.book-container {
  margin-top: 80px;
  display: flex;
  gap: 12px;
  margin-left: 5px;
  border-style: solid;
  border-color: #fff;
  border-width: 1px;
  padding: 6px;
}
.book-title {
  margin: 0;
  font-size: 20px;
}
.book-author {
  margin: 0;
  font-size: 12px;
}
button {
  background-color: #000;
  color: #D79232;
  border-style: solid;
  border-color: #D79232;
  border-width: 1px;
  padding: 6px;
}
.remove-book {
  margin-left: auto;
  max-width: 70px;
}
.contact-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
}
.info-container {
  display: flex;
  flex-direction: column;
  font-size: 12px;
  gap: 20px;
  color: #fff;
}
#contact-section {
  display: none;
}
footer {
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
}
white_check_mark
eyes
raised_hands





1:56
afaf'
1:57
/* eslint-disable max-classes-per-file */
/* eslint-disable class-methods-use-this */
let bookTitle;
let bookAuthor;
const library = document.querySelector('.library');
let bookList = JSON.parse(localStorage.getItem('bookList')) || [];
function getInformation() {
  bookTitle = document.getElementById('bookTitle').value;
  bookAuthor = document.getElementById('bookAuthor').value;
}
class Book {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }
}
class BookShelf {
  constructor() {
    this.length = 0;
  }
  addBook(title, author, id) {
    const newBook = new Book(title, author, id);
    bookList.push(newBook);
    localStorage.setItem('bookList', JSON.stringify(bookList));
    this.get();
  }
  deleteBook(id) {
    const resultBooks = bookList.filter((book) => book.id !== id);
    localStorage.setItem('bookList', JSON.stringify(resultBooks));
    window.location.reload();
  }
  get() {
    let bookgenerator = '';
    bookList.forEach((book) => {
      bookgenerator += `<div class="book-container">
             <p class="book-title">"${book.title}" by ${book.author}</p>
             <button class="remove-book" id="${book.id}" onClick=giveInformation(this)>Remove</button>
           </div>`;
    });
    library.innerHTML = bookgenerator;
  }
}
const shelf = new BookShelf();
const addButton = document.querySelector('.add-button');
addButton.addEventListener('click', () => {
  getInformation();
  const bookId = Math.random() * 100000;
  const id = Math.trunc(bookId);
  const idstring = id.toString();
  shelf.addBook(bookTitle, bookAuthor, idstring);
});
function giveInformation(id) {
  const index = id.id;
  shelf.deleteBook(index);
}
window.onload = () => {
  let bookgenerator = '';
  bookList.forEach((book) => {
    bookgenerator += `<div class="book-container">
                 <p class="book-title">"${book.title}" by ${book.author}</p>
                 <button class="remove-book" id="${book.id}" onClick=giveInformation(this)>Remove</button>
              </div>`;
  });
  library.innerHTML = bookgenerator;
};
const x = 0;
if (x === 1) {
  giveInformation();
}
