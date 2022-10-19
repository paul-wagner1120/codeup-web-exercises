(function(){
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    let person = {
        firstName: "Paul",
        lastName: "Wagner"
    }
    ;
    console.log(person.firstName);
    console.log(person.lastName);
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function () {
        console.log("Hello from " + person.firstName + " " + person.lastName + "!");
    };
    person.sayHello();

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(function(shopper) {
       if (shopper.amount < 200){
           console.log("I am sorry " + shopper.name + ", your total did not qualify you for a discount today. " + "Your total today is $" + shopper.amount + ".");
       } else {
           console.log("Congratulations " + shopper.name + ", you spent enough money today to earn a 12% discount!!!! Your total before discount is $" + shopper.amount + " & your total after discount is $" + (shopper.amount - (shopper.amount * .12)).toFixed(2));
       }
    });



    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    let books = [
        {
            // number: "1",
            title: "The Art of War",
            author: {
                firstName: "Sun",
                lastName: "Tzu"
            }
        },
        {
            // number: "2",
            title: "Into the Fire",
            author: {
                firstName: "Dakota",
                lastName: "Meyer"
            }
        },
        {
            // number: "3",
            title: "Inside Delta Force",
            author: {
                firstName: "Eric",
                lastName: "Haney"
            }
        },
        {
            // number: "4",
            title: "Harry Potter and the Goblet of Fire",
            author: {
                firstName: "J.K.",
                lastName: "Rowling"
            }
        },
        {
            // number: "5",
            title: "The Lord of the Rings: The Return of the King",
            author: {
                firstName: "J.R.R.",
                lastName: "Tolkien"
            }
        }
    ];
    console.log(books[0])
    console.log(books[0].title);
    console.log(books[0].author.firstName);
    console.log(books[0].author.lastName);


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    books.forEach(function (book) {
        console.log("Book # " + (books.indexOf(book) + 1));
        // console.log("Book # " + book.number);
        console.log(book.title);
        console.log(book.author.firstName + " " + book.author.lastName)
    });

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

let libraryBooks = []
let addBook = confirm("Would you like to add a book to the library today?");
if (!addBook){
    alert("Thank you for visiting the library today!");
} else {
    createBook();
}
function createBook(){
    let book = {
        title: prompt("Please enter the title of the book you wish to add to the library"),
        author: prompt("Please enter the author of the new book you wish to add")
        }
    libraryBooks.push(book);
    let keepGoing = confirm("Thanks for your submission! Do you have any other books you would like to add today?");
        if (keepGoing){
            createBook();
        } else {
            alert("Thanks! You have added " + libraryBooks.length + " books to the library today!");
        }
}

function showBookInfo() {
    let randomBook = Math.floor(Math.random() * libraryBooks.length)
    alert("Here is a random book from the library! " + libraryBooks.title + "by: " + libraryBooks.author);
}
showBookInfo();
// console.log(libraryBooks);



    // books.forEach(function (book) {
    //     console.log("Book # " + (books.indexOf(book) + 1));
    //     // console.log("Book # " + book.number);
    //     console.log(book.title);
    //     console.log(book.author.firstName + " " + book.author.lastName)
    // });












// not my code -- using as reference from another student --
//     let outBook = {};
//     let userInput = prompt(`Please Enter book name / Authors first name/ last name. "please pay special attention to the "/" to separate your answers`);
//     let split = userInput.split(`/`);
//      console.log(split[0], split[1], split[2]);
//     createBook(split);
//     function createBook(array){
//         let newBook = {};
//         newBook.title = array[0];
//         newBook.author = {firstName: array[1], lastName:array[2]};
//         outBook = newBook;
//     }
//     function showBookInfo(book){
//         console.log(`${book.title}
// Title: ${book.title}
// Author: ${book.author.firstName} ${book.author.lastName}`)
//     }
//     showBookInfo(outBook);
//     // can not get a for loop to work on an object that doesn't have other nested



// function createBook(title, author) {
//     return {title: title, author: author}
// }
// console.log(createBook("The Hobbit", "Tolkien")[0]);
//
// let books = [
//     createBook("Rest In Peace Harambe", "The World"),
//     createBook("The Day I Learned How to Code", "Paul Wagner"),
//     createBook("Harry Potter and the Goblet of Fire", "J.K. Rowling")
// ]
// console.log(books);
//
})();