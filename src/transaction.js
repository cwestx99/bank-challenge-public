export default class Transaction {

    #date;
    #amount;
    #typeOfTransaction;
    #balance;

    constructor(date, credit = 0, debit = 0) {
        this.#date = date;
        this.#amount = credit + debit;
        credit > 0 && debit === 0 ? (this.#typeOfTransaction = `deposit`) : (this.#typeOfTransaction = `withdraw`);
        this.#balance;
    }

    // Setters

    setBalance(balance) {
        this.#balance = balance;
    }

    // Getters

    getBalance() {
        return this.#balance;
    }

    getDate() {
        return this.#date.toLocaleDateString(`en-GB`, {
            year: `numeric`, month: `2-digit`, day: `2-digit`
        });
    }

    getAmount() {
        return this.#amount;
    }

    getTypeOfTransaction() {
        return this.#typeOfTransaction;
    }
}