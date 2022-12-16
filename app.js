const form = document.querySelector('.book-form');
const booksContainer = document.querySelector('.books-container');
const title = form[0];
const author = form[1];

const addBook = () => {
  if (title.value || author.value) {
    const book = {
      id: new Date().getTime().toString(),
      title: title.value,
      author: author.value,
    };
    const books = JSON.parse(localStorage.getItem('books')) || [];
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
    return books;
  }
  return 'Transaction Completed';
};

const removeBook = (id) => {
  const books = JSON.parse(localStorage.getItem('books')) || [];
  const newBooks = [...books.filter((book) => book.id.toString() !== id.toString())];
  localStorage.setItem('books', JSON.stringify(newBooks));
  return newBooks;
};

const renderBooks = () => {
  const localBooks = JSON.parse(localStorage.getItem('books')) || [];
  booksContainer.innerHTML = '';
  localBooks.forEach((book) => {
    booksContainer.innerHTML += `
    <li class="book">
    <span>${book.title}</span>
    <span>${book.author}</span>
    <button type="button" id=${book.id} class="remove-button">Remove</button>
    <hr>
    </li>`;
  });
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addBook();
  form.reset();
  renderBooks();
});

booksContainer.addEventListener('click', (e) => {
  const { target } = e;
  removeBook(target.id);
  renderBooks();
});

window.onload = renderBooks();