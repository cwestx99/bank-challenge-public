import Account from "./account.js";
import Statement from "./statement.js";
import Transaction from "./transaction.js";


let clientAccount = new Account

clientAccount.bankTransaction(new Transaction(new Date(`2012/1/10`), 1000));
clientAccount.bankTransaction(new Transaction(new Date(`2012/1/13`), 2000));
clientAccount.bankTransaction(new Transaction(new Date(`2012/1/14`), 0, 500));
Statement.printStatement(clientAccount);