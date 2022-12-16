const form = document.querySelector('.book-form');
const booksContainer = document.querySelector('.books-container');
const title = form[0];
const author = form[1];

class Book {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
  }

  addBook = () => {
    if (title.value || author.value) {
      const book = {
        id: new Date().getTime().toString(),
        title: title.value,
        author: author.value,
      };
      this.books.push(book);
      localStorage.setItem('books', JSON.stringify(this.books));
      return this.books;
    }
    return 'Transaction Completed';
  };

  removeBook = (id) => {
    const books = this.books.filter((book) => book.id.toString() !== id.toString());
    this.books = books;
    localStorage.setItem('books', JSON.stringify(this.books));
    return books;
  };

  renderBooks = () => {
    booksContainer.innerHTML = '';
    this.books.forEach((book) => {
      booksContainer.innerHTML += `
    <li class="book">
    <span>${book.title}</span>
    <span>by</span>
    <span>${book.author}</span>
    <button type="button" id=${book.id} class="remove-button">Remove</button>
    <hr>
    </li>`;
    });
  };
}

const books = new Book();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  books.addBook();
  form.reset();
  books.renderBooks();
});

booksContainer.addEventListener('click', (e) => {
  const { target } = e;
  books.removeBook(target.id);
  books.renderBooks();
});

window.onload = books.renderBooks();
