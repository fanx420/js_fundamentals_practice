/*🧩 Problem: Library Management System
Create a small system to manage books and their borrowing status.

📘 Requirements:
Create a Book class with:

title (string)

author (string)

isAvailable (boolean)

Add methods:

borrowBook() → sets isAvailable to false if it's available, else return a message that it's already borrowed.

returnBook() → sets isAvailable to true

getStatus() → returns a message like:

"Title: [title] by [author] is available."

"Title: [title] by [author] is currently borrowed."

Test scenario:

Create 3 book instances.

Borrow one book.

Display the status of all books.

Return the borrowed book.

Display the status again.*/

// 📝 Solution:
class Book {
    constructor(title, author, isAvailable){
        this.title = title;
        this.author = author;
        this.isAvailable = isAvailable;
    };
    borrowBook(){

        if (this.isAvailable){
            this.isAvailable = false
            console.log(`You've borrowed ${this.title}`)
        }else{
            console.log(`This book titled: ${this.title} is already borrowed `)
        }
       
    };
    returnBook(){
        if (!this.isAvailable){
            this.isAvailable = true;
        };
    };
    
    getStatus(){
        const status = this.isAvailable ? "available" : "currently borrowed";
    console.log(`Title: ${this.title} by ${this.author} is ${status}`);
    }
}

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", true);
const book2 = new Book("1984", "George Orwell", true);
const book3 = new Book("To Kill a Mockingbird", "Harper Lee", true);

book1.borrowBook()

const books = [book1, book2, book3]

books.forEach(book => book.getStatus())


/*output:
You've borrowed The Hobbit
Title: The Hobbit by J.R.R. Tolkien is currently borrowed
Title: 1984 by George Orwell is available
Title: To Kill a Mockingbird by Harper Lee is available */