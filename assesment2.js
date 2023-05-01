const books = [
{ title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
isAvailable: true },
{ title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
isAvailable: false },
{ title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
1866, isAvailable: true },
{ title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
isAvailable: false },
{ title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
];


//Create a function called getAvailableBooks that returns an array of all available
// books.
const getAvailableBooks = (books)=>{

    let allBooks = [];
    for (let index = 0; index <books.length; index++) {
        allBooks.push(books[index].title)
    }
    return allBooks;
}
console.log(getAvailableBooks(books))


//Create a function getBooksByAuthor that takes an author's name as an argument and
// returns an array of all books by that author.
const getBooksByAuthor=(name)=>{

    let allBooksByAuthor = [];

    for (let i = 0; i < books.length; i++) {
        allBooksByAuthor.push(books[i].name.author.title);
    }
    return getBooksByAuthor;
        
    }
console.log(getBooksByAuthor('J.D. Salinger'));


// Create a function addNewBook that takes a book object as an argument and adds it
// to the library, ensuring that the new book has all required properties (title, author,
// publicationYear, and isAvailable).
const addNewBook = (book)=>{
    const newBooks = {


    }


}


// Create a function checkoutBook that takes a book title as an argument and changes
// the book's isAvailable property to false. If the book is not found in the library, the
// function should return a message indicating that the book is not available.
const checkoutBook=(booktitle)=>{
    for (let index = 0; index < books.length; index++) {
        if (booktitle.books[index].isAvailable=true) {
            books.isAvailable=false
        }
        else if (booktitle.books[index].isAvailable=false) {
            console.log(`${booktitle} is not available`);
        }
        
    }
}
// checkoutBook('Great Expectations')


// Create a function returnBook that takes a book title as an argument and changes the
// book's isAvailable property to true. If the book is not found in the library, the function
// should return a message indicating that the book does not belong to the library.
const returnBook=(title)=>{
    for (let index = 0; index < books.length; index++) {
        if (booktitle.books[index].isAvailable=false) {
            books.isAvailable=true
        }
        else if (booktitle.books[index].isAvailable=false) {
            console.log(`${booktitle} does not belong to the library`);
        }
        
    }
}
// returnBook('Crime and Punishment')

