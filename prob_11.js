/*🧠 Problem: Library Management – Late Return Penalty
You are to model a simple library system where each borrower can borrow books and be penalized for late returns.

✅ Requirements:
Create a Borrower class

Properties: name, borrowedBooks (an array)

Method: borrowBook(book, daysLate)

Add the book title to the borrowedBooks list.

If daysLate > 0, calculate a fine: ₱10 per day late and display it.

Else, show a success message.

Create a Book class

Properties: title, author, isAvailable

Method: markAsBorrowed() → set isAvailable to false

Method: markAsReturned() → set isAvailable to true */

//solution:

 class Borrower {
    constructor(name, borrowedBooks = []){
        this.name = name; 
        this.borrowedBooks = borrowedBooks || [];
    }
    
    borrowBook(book, daysLate)
    {
        if(book.isAvailable) {
            book.markAsBorrowed();
            this.borrowedBooks.push(book.title);
            console.log(`${this.name} borrowed ${book.title}`);
            if (daysLate > 0){
                const fine = daysLate * 10;
                console.log(`Late by ${daysLate} days. Fine: ₱${fine}`);
            }
        }else{
            console.log(`Sorry, the book ${book.title} is not available`)
        }
    }
    returnBook(book){
        if(!book.isAvailable){
            book.markAsReturned();
            console.log(`${this.name} has returned the book: ${book.title}`)
        }
    }
}

class Book {
    constructor(title, author, isAvailable){
        this.title = title;
        this.author = author;
        this.isAvailable = isAvailable;
    };
    markAsBorrowed(){

        if (this.isAvailable){
            this.isAvailable = false
        }
       
    };
    markAsReturned(){
        if (!this.isAvailable){
            this.isAvailable = true;
        };
    };
}

const borrower1 = new Borrower("Frank")

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", true);
const book2 = new Book("1984", "George Orwell", true);
const book3 = new Book("To Kill a Mockingbird", "Harper Lee", true);


borrower1.borrowBook(book1, 3);


/*Output:
Frank borrowed The Hobbit
Late by 3 days. Fine: ₱30 */






