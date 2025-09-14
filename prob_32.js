/*🔹 Problem: Bank Account Class

Create a BankAccount class in JavaScript with the following features:

A constructor that takes the owner name and an initial balance.

A deposit(amount) method that increases the balance.

A withdraw(amount) method that decreases the balance (but only if enough funds exist).

A getBalance() method that returns the current balance.

A toString() method that prints "Owner: <owner>, Balance: <balance>". */

class BankAccount {
    constructor(owner, balance = 0) {
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount) {
        if (amount <= 0) {
            console.log("Deposit amount must be greater than zero.");
            return;
        }
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount <= 0) {
            console.log("Withdrawal amount must be greater than zero.");
            return;
        }
        if (this.balance < amount) {
            console.log("Insufficient funds.");
            return;
        }
        this.balance -= amount;
    }

    getBalance() {
        return this.balance;
    }

    toString() {
        return `Owner: ${this.owner}, Balance: $${this.balance}`;
    }
}
    