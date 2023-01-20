export default class Statement {

    //Method to print the statement
    static printStatement(account) {
        this.headings();
        for (let i = 0; i < account.getTransactionList().length; i++) {
            console.log(this.createStatement(account.getTransactionList()[i]));
        };
    }

    // Headings of the statement
    static headings() {
        console.log(`Date       || Credit  || Debit   || Balance`);
    }

    // Whitespace creator
    static whiteSpace(length) {
        let blank = " ";
        return blank.repeat(length >= 6 ? (10 - length) / 2 : (12 - length) / 2); // To format the structure of the statement by adding whitespace to fit the column. (Only works for 1 to 4 digit transactions)
    }

    // Method to create each line of the statement
    static createStatement(transaction) {
        if (transaction.getTypeOfTransaction() === "deposit") {
            return `${transaction.getDate()} || ${transaction.getAmount().toFixed(2)}${this.whiteSpace(transaction.getAmount().toFixed(2).length)}||         || ${transaction.getBalance().toFixed(2)}`
        } else {
            return `${transaction.getDate()} ||         || ${transaction.getAmount().toFixed(2)}${this.whiteSpace(transaction.getAmount().toFixed(2).length)}|| ${transaction.getBalance().toFixed(2)}`
        }
    }
}