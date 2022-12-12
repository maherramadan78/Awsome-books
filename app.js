// Elements Selecting
const book = document.querySelector("#book-name");
const author = document.querySelector("#author-name");
const submit = document.querySelector(".btn");
const list = document.querySelector("#book-list");



// Add Event listener
submit.addEventListener('click', function(e) {
     e.preventDefault(); // keep changed;
     if(book.value == '' && author.value == '') {
      
        // warning class added
        book.classList.add('warning');
        author.classList.add('warning');

        book.setAttribute("placeholder","write a book name.")
        author.setAttribute("placeholder","write an author name.")

        // remove warning text & class
        function removeWarning() {
            book.classList.remove('warning');
            author.classList.remove('warning');
            book.setAttribute("placeholder","")
            author.setAttribute("placeholder","")
        }
         setTimeout(removeWarning, 1024)


    } else if (book.value == '') {
        // For individual warning
        book.classList.add('warning');
        book.setAttribute("placeholder","write a book name.")

        function removeNameWarning() {
        book.classList.remove('warning');
        book.setAttribute("placeholder", "")
         }
         setTimeout(removeNameWarning, 1024);
         } else if (author.value == '') {

             // For individual warning
             author.classList.add('warning');
             author.setAttribute("placeholder","write an author name.");

             function removeAuthorWarning() {
                author.classList.remove('warning');
                author.setAttribute("placeholder", "")
             }
             setTimeout(removeAutorWarning, 1024);

              
         } else  {
        // row creation & register
        const newRow = document.createElement('tr');
        list.appendChild(newRow);

        // new book column creation & take input
        const newBookColumn = document.createElement('th');
        newRow.appendChild(newBookColumn);
        newBookColumn.innerText = book.value;

        // new book column creation & take input
        const newAuthorColumn = document.createElement('th');
        newRow.appendChild(newAuthorColumn);
        newAuthorColumn.innerText = author.value;

    }    
    
    // blink all the box after input taken.
    book.value = '';
    author.value = '';


})

