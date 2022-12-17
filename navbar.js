const listBook = document.getElementById('bookList');
const bookAdd = document.getElementById('addBook');
const contact = document.getElementById('contact');
const mainScreen = document.querySelector('#main-screen');
const bookListScreen = document.querySelector('.noShow');
const contactSection = document.querySelector('#contact-section');
function displayBookList() {
  bookListScreen.style.display = 'block';
  mainScreen.style.display = 'none';
  contactSection.style.display = 'none';
}
function displayAddBook() {
  mainScreen.style.display = 'block';
  bookListScreen.style.display = 'none';
  contactSection.style.display = 'none';
}
function displayContact() {
  mainScreen.style.display = 'none';
  bookListScreen.style.display = 'none';
  contactSection.style.display = 'block';
}
listBook.addEventListener('click', displayBookList);
bookAdd.addEventListener('click', displayAddBook);
contact.addEventListener('click', displayContact);
