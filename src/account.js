export default class Account {

    #balance;
    #transactionList;

    constructor() {
        this.#balance = 0;
        this.#transactionList = [];
    }

    // Method to do a bank transaction

    bankTransaction(transaction) {
        this.#balance += (transaction.getTypeOfTransaction() === `deposit` ? transaction.getAmount() : -transaction.getAmount())
        transaction.setBalance(this.#balance);
        this.#transactionList.unshift(transaction);
    }

    // Getters

    getBalance() {
        return this.#balance;
    }


    getTransactionList() {
        return this.#transactionList;
    }
}